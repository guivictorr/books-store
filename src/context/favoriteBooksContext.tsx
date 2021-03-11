import React, { createContext, useState } from 'react';
import { FavoriteBooksContext } from '../interfaces';

export const FavoriteContext = createContext<FavoriteBooksContext>(
  {} as FavoriteBooksContext,
);

export const FavoriteProvider: React.FC = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState<string[]>([]);

  const handleFavoriteBooks = (bookId: string) => {
    if (!favoriteBooks.includes(bookId)) {
      setFavoriteBooks([...favoriteBooks, bookId]);
    } else {
      const bookIndex = favoriteBooks.findIndex(item => item === bookId);
      favoriteBooks.splice(bookIndex, 1);
    }
  };

  const handleIsFavorite = (bookId: string) => favoriteBooks.includes(bookId);

  return (
    <FavoriteContext.Provider
      value={{
        handleIsFavorite,
        handleFavoriteBooks,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
