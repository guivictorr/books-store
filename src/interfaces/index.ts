export interface ListPageProps {
  key: string;
  name: string;
  params: {
    subjectTitle: string;
  };
}

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

export interface HeaderProps {
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

export interface LoadMoreButtonProps {
  searchTerm: string;
}

export interface BooksContextProps {
  booksData: BookDataProps[];
  loadMoreNumber: number;
  handleGetBooks(searchTerm: string, maxResults?: number): Promise<void>;
  handleLoadMore(searchTerm: string): Promise<void>;
  setLoadMoreNumber(number: number): void;
}
