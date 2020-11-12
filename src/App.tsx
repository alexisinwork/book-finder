import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';

const url = 'https://www.googleapis.com/books/v1/volumes?q=kiz';

export type Book = {
  kind: string,
  id: string,
  selfLink: string,
  volumeInfo:{
    title: string,
    subtitle: string,
    authors: Array<string>,
    publisher: string,
    publishedDate: string,
    description: string,
    industryIdentifiers: Array<{ type: string, identifier: string }>,
    pageCount: number,
    categories: Array<string>,
    maturityRating: string,
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    },
    language: string,
    previewLink: string,
  }
};

export type BookAPI = {
  kind: 'books#volumes',
  totalItems: number,
  items: Array<Book>
};

const App = (): ReactElement => {
  const [books, setBooks] = useState<Array<Book>>([]);

  useEffect(() => {
    async function getRecipes() {
      fetch(url)
        .then((res) => res.json())
        .then((res: BookAPI) => setBooks(res.items));
    }

    getRecipes();
  }, []);

  return (
    <div className="App">
      {books && books.length}
    </div>
  );
};

export default App;
