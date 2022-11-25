import React from 'react';
// import reactDom from 'react-dom'; - React 17
import ReactDOM from 'react-dom/client'; // React 18
// CSS
import './index.css';

// Books Data
import { books } from './books';

// Components
import Book from './components/Book';

function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

// React 17
// reactDom.render(<BookList />, document.getElementById('root'));
