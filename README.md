# Product Catalog - MERN Stack

A full-stack product catalog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- CRUD operations for products
- Search functionality
- Category filtering
- Responsive design
- MongoDB database
- RESTful API

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd product-catalog
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
cd ..
```

4. Create a `.env` file in the root directory with the following content:
```
MONGODB_URI=mongodb://localhost:27017/product-catalog
PORT=5000
```

5. Start MongoDB:
- If using local MongoDB, make sure the MongoDB service is running
- If using MongoDB Atlas, update the MONGODB_URI in the .env file with your connection string

## Running the Application

1. Start the backend server:
```bash
npm run dev
```

2. In a new terminal, start the frontend development server:
```bash
npm run client
```

Or run both servers concurrently:
```bash
npm run dev:full
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Products

- `GET /api/products` - Get all products
  - Query parameters:
    - `search`: Search term for name and description
    - `category`: Filter by category
    - `skip`: Number of records to skip (pagination)
    - `limit`: Maximum number of records to return

- `GET /api/products/:id` - Get a specific product

- `POST /api/products` - Create a new product
  - Required fields:
    - `name`: Product name
    - `description`: Product description
    - `price`: Product price
    - `category`: Product category

- `PUT /api/products/:id` - Update a product
  - All fields are optional

- `DELETE /api/products/:id` - Delete a product

## Technologies Used

- **Frontend**:
  - React.js
  - React Router
  - Axios
  - CSS3

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Express Validator

## Project Structure

```
product-catalog/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       ├── App.js
│       └── App.css
├── models/                 # MongoDB models
├── server.js              # Express server
├── package.json
└── .env                   # Environment variables
```
