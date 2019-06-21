# Porfolio

Full stack personal portfolio progressive web application. Mongoose, Express, Node for the back end; React + Redux for the front end. Showcases my resume, projects, and contact information and allows me to update them easily anytime.

## Installation

### Prerequisites

- node
- npm
- MongoDB Atlas / mLab URI

1. Clone this repository

2. Install server dependencies
   ```bash
   $ cd server
   $ npm install
   ```
3. Install client dependencies
   ```bash
   $ cd client
   $ npm install
   ```

## Run the app

1. Inside server/config, create a dev.js file with your own values
   ```bash
   module.exports = {
     mongoURI: 'your-uri-here',
     jwtSecret: 'your-secret-here',
     adminKey: 'your-key-here'
   };
   ```
2. Repeat step 1 with a test.js file for route integration testing
3. Start the server
   ```bash
   $ cd server
   $ npm run dev
   ```
4. Start the client
   ```bash
   $ cd client
   $ npm start
   ```
5. Browse to `http://localhost:3000/`

## License

This project is made available under the **MIT License**.
