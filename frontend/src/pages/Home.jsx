import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5555/books');
        const data = await response.json();
        setBooks(data.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Book Management</h1>
      <nav className="mb-6">
        <Link to="/books/create" className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 mr-2">Create Book</Link>
      </nav>
      <h2 className="text-2xl font-semibold mb-4">Book List</h2>
      <ul className="space-y-4">
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book._id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">{book.title}</h3>
              <p className="text-gray-700">Author: {book.author}</p>
              <p className="text-gray-500">Published Year: {book.publishYear}</p>
              <Link to={`/books/details/${book._id}`} className="text-blue-500 hover:underline">View Details</Link>
            </li>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
