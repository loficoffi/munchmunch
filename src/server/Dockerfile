# Use the latest LTS version of Node as the parent image
FROM node:20

# Set the working directory in the container to the root of your server directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your backend code into the container
COPY . .

# Expose the port your server listens on
EXPOSE 5050

# Set the environment to production
ENV NODE_ENV=production

# Command to run your app
CMD ["node", "index.js"]