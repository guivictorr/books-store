import React from 'react';

import { BooksProvider } from './booksContext';

const AppProvider: React.FC = ({ children }) => {
  return <BooksProvider>{children}</BooksProvider>;
};

export default AppProvider;
