import React, { useContext, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';

import { ListPageProps } from '../../interfaces';
import { BooksContext } from '../../context/booksContext';

import Book from '../../components/Book';
import Header from '../../components/Header';
import LoadMoreButton from '../../components/LoadMoreButton';

import { ListContainer } from './styles';

const List: React.FC = () => {
  const { booksData } = useContext(BooksContext);
  const {
    params: { subjectTitle },
  } = useRoute<ListPageProps>();

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
        ListFooterComponent={() => <LoadMoreButton searchTerm={subjectTitle} />}
      />
    </ListContainer>
  );
};

export default List;
