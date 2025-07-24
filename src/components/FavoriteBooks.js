import React from 'react';

function FavoriteBooks() {

  const books = ['The Alchemist', 'Atomic Habits', 'Wings of Fire'];

  return (

    <div style={{ textAlign: 'center', marginTop: '40px' }}>

      <h2> My Favorite Books</h2>

      <ul style={{ listStyleType: 'circle', fontSize: '18px' }}>

        {books.map((book, index) => (

          <li key={index}>{book}</li>

        ))}

      </ul>
      
    </div>
  );
}

export default FavoriteBooks;
