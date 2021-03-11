import { ReactNode } from 'react';
import { Animated } from 'react-native';

export type LayoutProps = {
  children: ReactNode;
};

export type FavoriteButtonProps = {
  bookId: string;
};

export type FavoriteStylesProps = {
  isFavorite: boolean;
};

export type IParams = {
  List: {
    searchTerm: string;
  };
  Details: {
    bookId: string;
  };
};

export type SubjectProps = {
  title: string;
};

export type BookProps = {
  imageUrl: string;
  bookId: string;
};

export type BookDataProps = {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    authors: string[];
    pageCount: number;
    averageRating: number;
    imageLinks: {
      thumbnail: string;
    };
  };
  saleInfo: {
    saleability: string;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
  };
};

export type IUseScrollAnimation = {
  translateX: Animated.AnimatedInterpolation;
  opacityAnimation: Animated.AnimatedInterpolation;
  scrollY: Animated.Value;
};

export type BooksContextProps = {
  booksData: BookDataProps[];
  handleGetBooks(searchTerm: string, maxResults?: number): Promise<void>;
};

export type FavoriteBooksContext = {
  handleFavoriteBooks(bookId: string): void;
  handleIsFavorite(bookId: string): boolean;
};
