import React, { createContext, useState } from 'react';
import { BookDataProps } from '../interfaces';
import api from '../services/api';

interface BooksContextProps {
  booksData: BookDataProps[];
  handleGetBooks(searchTerm: string): Promise<void>;
}

export const BooksContext = createContext<BooksContextProps>(
  {} as BooksContextProps,
);

export const BooksProvider: React.FC = ({ children }) => {
  const [booksData, setBooksData] = useState<BookDataProps[]>([]);

  const handleGetBooks = async (
    searchTerm: string,
    maxResults: number = 15,
  ) => {
    const { data } = await api.get(`${searchTerm}&maxResults=${maxResults}`);
    const books = data.items;

    const filteredBooks = books.filter(
      (book: BookDataProps) => book.volumeInfo.imageLinks,
    );

    setBooksData(filteredBooks);
  };

  return (
    <BooksContext.Provider
      value={{
        booksData,
        handleGetBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
