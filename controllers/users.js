const usersRouter = require('express').Router()

const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

usersRouter.get('/', async (request, response, next) => {
  try {
    const users = await User.find({})
    response.status(200).json(users)
  } catch (exception) {
    next(exception)
  }
})

usersRouter.get('/:id', async (request, response, next) => {
  try {
    const user = await User.findById(request.params.id)
    if (user) {
      response.status(200).json(user)
    } else {
      response.status(404).end()
    }
  } catch (exception) {
    next(exception)
  }
})

usersRouter.post('/', async (request, response, next) => {
  const { email, name, password } = request.body
  if (!email || !name || !password) {
    return response.status(400).json({
      error: 'email, name and password are required'
    })
  }

  if (password.length < 6) {
    return response.status(400).json({
      error: 'password must be at least 6 characters long'
    })
  }

  try {
    const userExists = await User.findOne({ email })

    if (userExists) {
      return response.status(400).json({
        error: 'user already exists'
      })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const newUser = new User({
      email,
      name,
      passwordHash
    })

    const savedUser = await newUser.save()

    const userForToken = { email: savedUser.email, id: savedUser._id }

    const token = jwt.sign(userForToken, process.env.SECRET_KEY, {
      expiresIn: 60 * 60
    })

    response.status(201).json({
      id: savedUser.id,
      email: savedUser.email,
      name: savedUser.name,
      token
    })
  } catch (exception) {
    next(exception)
  }
})

usersRouter.delete('/:id', async (request, response, next) => {
  try {
    await User.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

module.exports = usersRouter
