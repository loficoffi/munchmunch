# MunchMunch

MunchMunch is a MERN-stack based culinary web application designed to enhance user engagement by allowing them to discover new dishes and recipes. This application aims to simplify the cooking process through personalized experiences, saving favorite dishes, and accessing detailed recipes with step-by-step instructions.

## Features

- **User Authentication:** Register and log in to access personalized features.
- **Recipe Discovery:** Browse and search a variety of dishes categorized by ingredients, cuisine, etc.
- **Favorites:** Save and manage favorite recipes for easy access.
- **Interactive Guides:** Follow step-by-step cooking instructions.

## Technologies Used

- **MongoDB:** For storing user data and recipes.
- **Express.js:** Backend framework for handling HTTP requests.
- **React:** Frontend library for building the user interface.
- **Node.js:** Runtime environment for the backend.
- **Docker:** For containerizing the application and ensuring consistent environments across development and production.
- **AWS EC2:** Hosting the application for live public access.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Docker
- MongoDB

### Installation

1. **Clone the repository**
  
git clone https://github.com/yourusername/munchmunch.git
cd munchmunch
   
2. **Set up environment variables**

Create a .env file in the root directory and update it with your specific settings (e.g., database URL, API keys, secret keys for JWT).

3. **Install dependencies**

# General dependencies
cd src
npm install

# Backend dependencies
cd server
npm install

# Frontend dependencies
cd ../client
npm install

### Running Locally

# Start the backend server
cd server
npm start

# In a new terminal, start the frontend client
cd client
npm start

The application should now be running on localhost:5173 (frontend) and localhost:5050 (backend), or other ports specified in your environment settings.

### Using Docker

# Build and run the container
docker-compose up --build

This command will set up both the frontend and backend services as specified in the docker-compose.yml file.

### Testing

# To run the automated tests for this project:
cd server
npm run jest

### Deployment

Refer to the docker-deploy.yml for CI/CD configurations which automate the deployment process using GitHub Actions to push to your AWS EC2 instance.

### LICENSE

Refer to the LICENSE file. This project is licensed under the MIT license.

### Made with ❤️ by Raffael Friedl | Catharina-Emilia Ahrens | Maximilian Lippmann  | Juliana Kühn