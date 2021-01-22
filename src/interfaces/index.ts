export interface DetailsPageProps {
  key: string;
  name: string;
  params: {
    bookId: string;
  };
}

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
  loadMoreNumber: number;
  currentSearch: string;
  favoriteBooks: string[];
  handleGetBooks(searchTerm: string, maxResults?: number): Promise<void>;
  handleLoadMore(): Promise<void>;
  setLoadMoreNumber(number: number): void;
  handleFavoriteBooks(bookId: string): void;
}
