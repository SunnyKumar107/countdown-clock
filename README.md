# Countdown-clock

[See Live](https://countdownclock.vercel.app)

## Description

This project is a web application that provides a unique user experience with a countdown clock and customizable speed settings. It includes robust login and authentication features and allows users to share their current clock and slider settings with others.

## Features

- **Login and Authentication:**

  - Users can log in using their email & password.
  - Users can log in with Google.

- **Post-login Screen:**
  - An analog clock running anticlockwise, counting down from the current time to 120 minutes earlier.
  - A slider to control the speed of the clock hands, allowing users to increase or decrease the speed.
  - A share button that generates a share URL, enabling another user to view the clock and slider on the same page with the exact same slider configurations as when the share button was clicked.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/project-name.git
   ```

2. **Navigate to the project directory:**

   ```sh
   cd project-name
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Set up environment variables:**

   - Create a `.env` file in the root of the project.
   - Add your environment variables (e.g., API keys, database URLs) to the `.env` file.

5. **Run the application:**
   ```sh
   npm start
   ```

## Usage

1. **Login:**

   - Use your email & password or Google account to log in.

2. **Clock and Slider:**

   - After logging in, you will see an analog clock running anticlockwise, counting down from the current time to 120 minutes earlier.
   - Use the slider to control the speed of the clock hands.

3. **Share:**
   - Click the share button to generate a share URL.
   - Share this URL with others to allow them to view the clock and slider with the same settings.
