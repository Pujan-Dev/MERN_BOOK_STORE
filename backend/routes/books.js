import express from "express";
import { Book } from "../models/BookModel.js";
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'Please provide title, author, and publish year.' });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' });
    }
});

router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' });
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const book = await Book.findById(_id);
        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }
        return res.status(200).json(book);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' });
    }
});

router.put('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'Please provide title, author, and publish year.' });
        }   

        const updatedBook = await Book.findByIdAndUpdate(
            _id, 
            {
                title: req.body.title,
                author: req.body.author,
                publishYear: req.body.publishYear,
            },
            { new: true } // This option returns the updated document
        );

        if (!updatedBook) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book updated", data: updatedBook });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' });
    }
});
// delete

router.delete('/:_id',async (req,res)=>{
    try {
        const { _id } = req.params;
        const deletebook =await Book.findByIdAndDelete(_id);
        if(!deletebook){
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book deleted" });
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' });
    }
})
export default router