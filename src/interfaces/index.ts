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
    imageLinks: {
      thumbnail: string;
    };
  };
  saleInfo: {
    saleability: string;
  };
}

export interface BooksContextProps {
  booksData: BookDataProps[];
  loadMoreNumber: number;
  currentSearch: string;
  handleGetBooks(searchTerm: string, maxResults?: number): Promise<void>;
  handleLoadMore(): Promise<void>;
  setLoadMoreNumber(number: number): void;
}
