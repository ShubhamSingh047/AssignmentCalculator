# Calculator App - Frontend

## Overview

This project is a frontend-only application using React. The application is developed with a Test-Driven Development (TDD) approach, ensuring high-quality code and robust functionality consisting of add on functionality of dark and light mode.

## Folder Structure

```
project-root/
|
├── client/                    # React frontend
│   ├── public/                # Public assets (e.g., index.html, images)
│   ├── src/                   # Source files for the React application
│   └── package.json           # Package information and scripts
├── .gitignore                 # Git ignore file for ignoring specific files and folders
└── README.md                  # Project documentation
```

## Installation

### Prerequisites

- Node.js and npm must be installed.

### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Install dependencies**:

   - Install client dependencies:
     ```bash
     cd client
     npm install
     ```

3. **Run the Application**:

   - Start the frontend development server:
     ```bash
     npm start
     ```

## Scripts

- **Frontend**:
  - `npm start`: Starts the frontend development server.
  - `npm test`: Runs the frontend tests.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS for styling.
- **Testing**: Jest, React Testing Library.

## Development Practices

The project follows TDD (Test-Driven Development) principles. For each feature, test cases are written first, followed by the code to pass the tests, and finally refactoring to improve the code quality.

## Testing

- **Frontend**: Unit tests are written using Jest and React Testing Library to verify individual components and the core functionality of the app.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for improvements.

## Contact

For questions or issues, reach out via GitHub or email.
