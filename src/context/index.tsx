import React from 'react';

import { BooksProvider } from './booksContext';
import { FavoriteProvider } from './favoriteBooksContext';

const AppProvider: React.FC = ({ children }) => (
  <BooksProvider>
    <FavoriteProvider>{children}</FavoriteProvider>
  </BooksProvider>
);

export default AppProvider;
