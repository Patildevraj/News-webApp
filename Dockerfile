# Create file in root directory using Dockerfile name and paste the below code in that

# Use an official Node.js
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Serve the React app using an HTTP server
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]


# Install the Docker in Desktop using below link
# https://docs.docker.com/engine/install/

# Install the docker using .exe file and login with email id and give the username for docker


# Build the Docker Image:
# docker build -t APPLICATION_NAME .

# Run the Docker Image:
# docker run -p 3000:3000 APPLICATION_NAME 

# To Check the Docker container_id
# docker ps

# To Stop the Docker
# docker stop <container_id>

# To remove the Docker image
# docker rmi APPLICATION_NAME