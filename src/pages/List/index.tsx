import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';

import api from '../../services/api';
import { ListPageProps, BookDataProps } from '../../interfaces';

import Book from '../../components/Book';
import Header from '../../components/Header';

import { ListContainer } from './styles';

const List: React.FC = () => {
  const [booksData, setBooks] = useState<BookDataProps[]>();
  const {
    params: { subjectTitle },
  } = useRoute<ListPageProps>();

  const handleGetBooks = async () => {
    const { data } = await api.get(`${subjectTitle}&maxResults=40`);
    const books = data.items;

    const filteredBooks = books.filter(
      (book: BookDataProps) => book.saleInfo.saleability !== 'NOT_FOR_SALE',
    );

    setBooks(filteredBooks);
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <ListContainer>
      <Header title={subjectTitle} />
      <FlatList
        data={booksData}
        renderItem={({ item }) => (
          <Book imageUrl={item.volumeInfo.imageLinks.thumbnail} />
        )}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </ListContainer>
  );
};

export default List;
