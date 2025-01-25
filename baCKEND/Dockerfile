# Use Node.js as base image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the gRPC server port
EXPOSE 50051

# Start the gRPC server
CMD ["node", "index.js"]
