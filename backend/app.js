import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors'
import booksrouter from "./routes/books.js";
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());
app.use (cors())
app.get('/', (req, res) => {
    res.send("Hello");
});

app.use('/books' ,booksrouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// DATABASE CONNECTION
mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });
