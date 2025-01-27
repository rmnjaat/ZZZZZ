# Quest Search

Welcome to the project! Follow the steps below to set up the backend, frontend, and Docker container locally.

## Installation

### Backend Setup

1. install yarn 
```bash
 npm install -g yarn
```
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   npm 
   ```
5. You will see:
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
 > IF you are building docker image changes in cluster section  in envoy.yaml
    `address: host.docker.internal`
    `port_value: 50050`

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

  
                      
    ```bash
    envoy -c envoy.yaml
    ```

---

## Usage
- Access the frontend application in your browser at `http://localhost:3000`.

---



## Watch the Demo Video

[![Watch the video](https://img.youtube.com/vi/WhYviroDoU4/0.jpg)](https://www.youtube.com/watch?v=WhYviroDoU4)

--

## Screen Shots
![image](https://github.com/user-attachments/assets/aae9b3d9-0030-4025-9b2e-a1d2054a4225)

![image](https://github.com/user-attachments/assets/4aeb7b0b-cad6-4bd7-866f-557a91b30bc8)

![image](https://github.com/user-attachments/assets/2136ea26-68ce-465f-b2ce-669dec14ec1b)

![image](https://github.com/user-attachments/assets/c578c5ce-66ce-4715-89a0-2c041ecd1628)

![image](https://github.com/user-attachments/assets/13d79658-af32-4d85-bb10-b6d85763ef2c)



