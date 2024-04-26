# CDA-AuthenticationSystem

This project is a basic authentication system built with Express.js, TypeScript, and MongoDB. It provides an API for users to sign up, log in, and manage their profile.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js v21.2.0
- npm
- MongoDB Atlas

## Installation

1. Clone this repository:

```
git clone git@github.com:Pixeloceax/CDA-AuthenticationSystem.git
```

2. Navigate to the project directory:

```
cd CDA-AuthenticationSystem
```

3. Install dependencies:

```
npm install
```

4. Set up environment variables:

   Create a `config.env` file in the project root and configure the following variables:

   ```env
   PORT=<YOUR_PORT>
   MONGO_URI=<MONGO_CONNECTION_STRING>
   JWT_SECRET=<JWT_SECRET>
   JWT_EXPIRE=<EXPIRE_TIME>
   CORS_ALLOW_ORIGIN=<ORIGIN>
   ```

   Generate a secure JWT secret key effortlessly using Node.js:

   ```
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

## Usage

1. Start the server:

```
npm start
```

The server will be accessible at `http://localhost:<YOUR_PORT>`.

2. Using the API:

   - POST **Register:** request to `/auth/register` with `username` and `password` fields in the request body to create a new user account.

   - POST **Login:** request to `/auth/login` with the same fields to log in and obtain a JWT token.

   - GET **User Profile:** Use the JWT token in the `Authorization` header to access protected resources, such as `/user/profile`.

## Project Structure

- `src/`: Contains the application source code.
  - `controllers/`: Express controllers to handle routes.
  - `models/`: MongoDB models for the database.
  - `routes/`: Definition of API routes.
  - `middlewares/`: Express middlewares for authentication.
  - `utils/`: Utility functions.
  - `server.ts`: Entry point of the application.
- `dist/`: Contains transpiled JavaScript files.

## Deploying with Docker (Production)

To deploy the Authentication System application using Docker in a production environment, follow these steps:

1. Build the Docker Image
   Before deploying the application, you need to build a Docker image using the provided Dockerfile. Run the following command in the root directory of the project:

```
docker build -t authentication-system:latest ./
```

This command will build a Docker image tagged as authentication-system:latest using the Dockerfile in the current directory.

2. Run the Docker Container
   Once the Docker image is built, you can run a Docker container using the following command:

```
docker run -p <YOUR_PORT>:<YOUR_PORT> authentication-system:latest
```

This command will start a Docker container and map port <YOUR_PORT> on the host machine to port <YOUR_PORT> inside the container.

3. Access the Application
   After the container is running, you can access the Authentication System application by sending HTTP requests to the appropriate endpoint.
