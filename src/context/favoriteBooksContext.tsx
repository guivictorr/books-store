import React, { createContext, ReactElement, useState } from 'react';
import { FavoriteBooksContext, LayoutProps } from '../types';

export const FavoriteContext = createContext<FavoriteBooksContext>(
  {} as FavoriteBooksContext,
);

export const FavoriteProvider = ({ children }: LayoutProps): ReactElement => {
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
