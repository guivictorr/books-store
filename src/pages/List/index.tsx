import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';

import api from '../../services/api';
import { ListPageProps, BookDataProps } from '../../interfaces';

import Book from '../../components/Book';
import Header from '../../components/Header';

import { ListContainer, LoadMoreButton, LoadMoreText } from './styles';

const List: React.FC = () => {
  const [booksData, setBooks] = useState<BookDataProps[]>();
  const [maxResults, setMaxResults] = useState(15);
  const {
    params: { subjectTitle },
  } = useRoute<ListPageProps>();

  const handleGetBooks = async () => {
    const { data } = await api.get(`${subjectTitle}&maxResults=${maxResults}`);
    const books = data.items;

    setBooks(books);
  };

  const handleLoadMore = () => {
    if (maxResults >= 40) {
      return;
    }

    setMaxResults(maxResults + 5);
  };

  useEffect(() => {
    handleGetBooks();
  }, [maxResults]);

  return (
    <ListContainer>
      <Header title={subjectTitle} />
      <FlatList
        data={booksData}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item }) => (
          <Book
            imageUrl={item.volumeInfo.imageLinks.thumbnail}
            bookId={item.id}
          />
        )}
        ListFooterComponent={() => (
          <LoadMoreButton maxResults={maxResults} onPress={handleLoadMore}>
            <LoadMoreText>Load More</LoadMoreText>
          </LoadMoreButton>
        )}
      />
    </ListContainer>
  );
};

export default List;
