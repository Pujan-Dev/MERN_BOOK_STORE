import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowBooks = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:5555/books/${id}`);
      const data = await response.json();
      setBook(data);
    };

    fetchBook();
  }, [id]);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      {book ? (
        <>
          <h1 className="text-2xl font-semibold mb-4">{book.title}</h1>
          <p className="text-gray-700">Author: {book.author}</p>
          <p className="text-gray-500">Published Year: {book.publishYear}</p>
          <div className="mt-4">
            <Link to={`/books/edit/${book._id}`} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mr-2">Edit</Link>
            <Link to={`/books/delete/${book._id}`} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</Link>
          </div>
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default ShowBooks;
