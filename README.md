# Quest Search

Welcome to the project! Follow the steps below to set up the backend, frontend, and Docker container locally.

## Installation

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm 
   ```
4. You will see:
    ```
    backend@1.0.0 start
    node index.js
    gRPC server started on port 50051
    Mongo Connected
    ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm start
   ```
4. You will see
    ```
    Local: http://localhost:3000
    ```

### Envoy Proxy Setup

Envoy is used in this project as a reverse proxy to enable gRPC-Web communication between the frontend and backend. gRPC-Web allows web clients to interact with gRPC services over HTTP/1.1 or HTTP/2, which is essential for browser compatibility.

### Using Docker

This is an Envoy image built from my configuration use this , or you can build  using `docker file` .
1. Pull the Docker image:
   ```bash
   docker pull rmnjaat/envoyimage
   ```
2. Run the Docker container locally (Windows and Mac):
   ```bash
   docker run -d -p 8080:8080 -p 50050:50051 <docker-image-name>
   ```
    For Linux, run this command:
    ```bash
    sudo docker run --add-host=docker.host.internal:172.17.0.1 -p 8080:8080 -p 50050:50051 envoy1
    ```
   This will take requests from the frontend on port 8080 and forward them to port 5051 for the backend.

### Or if you have Envoy Locally Installed
1. Make sure Envoy is installed locally:

   > Make sure following changes in cluster section  in envoy.yaml
    `address: 127.0.0.1`
    `port_value: 50051`
                      
    ```bash
    envoy -c envoy.yaml
    ```

---

## Usage
- Access the frontend application in your browser at `http://localhost:3000`.

---

