# Expense Tracker
A full-stack Expense Tracker application built using MERN stack that allows users to manage their income and expenses efficiently with authentication and secure data.

## Features
- User authentication (Register / Login)

- Add, edit, and delete expenses

- Categorize expenses (Food, Travel, Rent, etc.)

- Track income and expenses separately

- View total balance, total income, and total expenses

- Secure JWT-based authentication

- Responsive UI

- RESTful API architecture

## Tech Stack
### Frontend

- React.js

- React Hooks

- Axios

- CSS / Bootstrap / Material UI (optional)

### Backend

- Node.js

- Express.js

- MongoDB

- Mongoose

- JSON Web Token (JWT)

- bcrypt

## Project Structure
    expense-tracker/
    │
    ├── client/               # Frontend (React)
    │   ├── src/
    │   ├── public/
    │   └── package.json
    │
    ├── server/               # Backend (Node + Express)
    │   ├── models/
    │   ├── routes/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── config/
    │   └── package.json
    │
    └── README.md

## Environment Variables

Create a .env file inside the server folder and add:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key

## Installation & Setup
### 1. Clone the Repository
    git clone https://github.com/your-username/expense-tracker.git
    cd expense-tracker

### 2. Backend Setup
    cd server
    npm install
    npm start


## Server will run on:

    http://localhost:5000

### 3. Frontend Setup
    cd client
    npm install
    npm run dev
    

## Frontend will run on:

    http://localhost:5173


(or http://localhost:3000 depending on setup)

## API Endpoints
### Auth Routes

    POST /api/auth/register – Register user
    
    POST /api/auth/login – Login user
    
    Expense Routes (Protected)
    
    GET /api/expenses – Get all expenses
    
    POST /api/expenses – Add new expense
    
    PUT /api/expenses/:id – Update expense
    
    DELETE /api/expenses/:id – Delete expense

## Authentication Flow

- User logs in or registers

- Backend generates JWT token

- Token stored in HTTP-only cookie or local storage

- Protected routes validated using middleware

- Future Enhancements

- Expense analytics with charts

- Monthly and yearly reports

- Export expenses as CSV/PDF

- Dark mode

- Multi-currency support

- Role-based access control


