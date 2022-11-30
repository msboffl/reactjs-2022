import React from 'react';
import { books } from '../books';
import Book from './Book';

const BookList = () => {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
};

export default BookList;
