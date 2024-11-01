import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteBooks = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5555/books/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Book deleted with ID: ${id}`);
        navigate('/'); // Redirect to home page after deletion
      } else {
        console.error('Failed to delete book');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Delete Book {id}</h1>
      <p className="mb-4">Are you sure you want to delete this book?</p>
      <button onClick={handleDelete} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">Confirm Delete</button>
    </div>
  );
};

export default DeleteBooks;
