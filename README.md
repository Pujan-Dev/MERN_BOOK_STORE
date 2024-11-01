
# MERN Book App 📚

A full-stack Book Management Application built with the **MERN stack** (MongoDB, Express, React, Node.js). This app allows users to browse, add, edit, and delete books. The back end handles user authentication, book data management, and CRUD operations, while the front end provides an interactive UI for managing book collections.

## Features

- **User Authentication:** Sign up and log in to manage a personal book collection.
- **CRUD Operations:** Create, Read, Update, and Delete books.
- **Responsive UI:** Built with React and styled for a smooth user experience.
- **REST API:** Developed with Express and Node.js to handle server-side logic.
- **Database Management:** MongoDB stores and retrieves book data.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v12+)
- **MongoDB**
- **npm** (v6+)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/mern-book-app.git
   cd mern-book-app
   ```

2. **Install dependencies**

   ```bash
   # Install server dependencies
   cd backend
   npm install

   # Install client dependencies
   cd ../frontend
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the `server` folder with the following variables:

   ```env
   MONGODB_URI=your_mongodb_uri
   PORT=5555
   ```

4. **Run the Application**

   In separate terminals, start both the client and server:

   ```bash
   # Start the server
   cd server
   npm start

   # Start the client
   cd ../client
   npm start
   ```

   Open your browser and go to `http://localhost:5555`.

## Project Structure

```plaintext
mern-book-app/
├── frontend/              # React front end
│   ├── public/          # Static assets
│   └── src/ 
           └── assets
           └── pages            # React components, pages, styles
├── backend/              # Express back end
│   ├── config/          # Configuration files (e.g., database setup)
│   ├── controllers/     # API controllers
│   ├── models/          # MongoDB models (e.g., Book, User)
│   ├── routes/          # API routes
│   └── server.js        # Main server file
└── README.md
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Book Management

- `GET /api/books` - Get all books
- `POST /api/books` - Add a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

## Technologies Used

- **MongoDB** - Database
- **Express.js** - Server framework
- **React** - Front-end framework
- **Node.js** - JavaScript runtime
- **Axios** - HTTP requests

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m 'feature description'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License.

