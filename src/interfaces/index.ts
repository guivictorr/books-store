export interface ListPageProps {
  key: string;
  name: string;
  params: {
    subjectTitle: string;
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
