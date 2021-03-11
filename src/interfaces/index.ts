export interface FavoriteButtonProps {
  isFavorite: boolean;
}

export type IParams = {
  List: {
    searchTerm: string;
  };
  Details: {
    bookId: string;
  };
};

export interface SubjectProps {
  title: string;
}

export interface BookProps {
  imageUrl: string;
  bookId: string;
}

export interface BookDataProps {
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
}

export interface BooksContextProps {
  booksData: BookDataProps[];
  handleGetBooks(searchTerm: string, maxResults?: number): Promise<void>;
}

export interface FavoriteBooksContext {
  handleFavoriteBooks(bookId: string): void;
  handleIsFavorite(bookId: string): boolean;
}
