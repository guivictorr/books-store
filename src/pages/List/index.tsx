import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import { BooksContext } from '../../context/booksContext';

import Book from '../../components/Book';
import Header from '../../components/Header';
import LoadMoreButton from '../../components/LoadMoreButton';

import { ListContainer } from './styles';

const List: React.FC = () => {
  const { booksData } = useContext(BooksContext);

  return (
    <ListContainer>
      <Header />
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
        ListFooterComponent={() => <LoadMoreButton />}
      />
    </ListContainer>
  );
};

export default List;
