# Project Name
project_name = "Calculator_App"

## Overview

This project is a full-stack application using React for the frontend and Node.js for the backend. The project follows a client-server architecture, ensuring a clear separation between frontend and backend logic. It is developed using Test-Driven Development (TDD) principles to ensure code quality and maintainability.

## Folder Structure

```
project-root/
│
├── client/                    # React frontend
│   ├── public/                # Public assets (e.g., index.html, images)
│   ├── src/                   # Source files for the React application
│   ├── package.json           # Package information and scripts
│   └── .env                   # Environment variables (frontend specific)
│
├── server/                    # Node.js backend
│   ├── config/                # Configuration files (e.g., database connection)
│   ├── controllers/           # Controller functions (logic for different routes)
│   ├── models/                # Mongoose models (schemas for MongoDB, if needed)
│   ├── routes/                # Route definitions
│   ├── app.js                 # Express application setup
│   ├── server.js              # Main server entry point
│   ├── package.json           # Package information and scripts
│   └── .env                   # Environment variables (backend specific)
│
├── .gitignore                 # Git ignore file for ignoring specific files and folders
├── README.md                  # Project documentation
└── docker-compose.yml         # Docker Compose setup (optional for deploying with Docker)
```

## Installation

### Prerequisites

- Node.js and npm installed.

### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Install dependencies**:

   - Install server dependencies:
     ```bash
     cd server
     npm install
     ```
   - Install client dependencies:
     ```bash
     cd ../client
     npm install
     ```

3. **Environment Variables**:

   - Create a `.env` file in both `client` and `server` directories based on the `.env.example` files provided.

4. **Run the Application**:

   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd ../client
     npm start
     ```

## Scripts

- **Backend**:

  - `npm start`: Starts the backend server.
  - `npm test`: Runs the backend tests.

- **Frontend**:

  - `npm start`: Starts the frontend development server.
  - `npm test`: Runs the frontend tests.

## Technologies Used

- **Frontend**: React, JavaScript/TypeScript, Axios for API calls, Tailwind CSS for styling.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (optional).

## Development Practices

This project follows TDD (Test-Driven Development) principles. Each new feature is developed by first writing the test cases, followed by writing the minimum code required to pass those tests, and finally refactoring to improve the implementation.

## Testing

- **Backend**: Unit tests are written using Jest.
- **Frontend**: Unit tests are written using Jest and React Testing Library.


## Contributing

Feel free to open issues and submit pull requests. Contributions are always welcome!

## Contact

For any questions or issues, please reach out via GitHub or email.
