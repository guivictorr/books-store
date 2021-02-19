import React, { createContext, useState } from 'react';
import { BookDataProps, BooksContextProps } from '../interfaces';
import api from '../services/api';

export const BooksContext = createContext<BooksContextProps>(
  {} as BooksContextProps,
);

export const BooksProvider: React.FC = ({ children }) => {
  const [booksData, setBooksData] = useState<BookDataProps[]>([]);
  const [favoriteBooks, setFavoriteBooks] = useState<string[]>([]);
  const [loadMoreNumber, setLoadMoreNumber] = useState(20);
  const [currentSearch, setCurrentSearch] = useState('');

  const handleFavoriteBooks = (bookId: string) => {
    if (!favoriteBooks.includes(bookId)) {
      setFavoriteBooks([...favoriteBooks, bookId]);
    } else {
      const bookIndex = favoriteBooks.findIndex(item => item === bookId);
      favoriteBooks.splice(bookIndex, 1);
    }
  };

  const handleGetBooks = async (searchTerm: string, maxResults = 15) => {
    setCurrentSearch(searchTerm);
    const { data } = await api.get(`${searchTerm}&maxResults=${maxResults}`);
    const books = data.items;

    const filteredBooks = books.filter(
      (book: BookDataProps) => book.volumeInfo.imageLinks,
    );

    setBooksData(filteredBooks);
  };

  const handleLoadMore = async () => {
    if (loadMoreNumber >= 40) {
      return;
    }
    setLoadMoreNumber(loadMoreNumber + 5);
    await handleGetBooks(currentSearch, loadMoreNumber);
  };

  const handleIsFavorite = (bookId: string) => favoriteBooks.includes(bookId);

  return (
    <BooksContext.Provider
      value={{
        booksData,
        currentSearch,
        handleIsFavorite,
        handleGetBooks,
        handleLoadMore,
        handleFavoriteBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
