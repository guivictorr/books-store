import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { useRoute, RouteProp } from '@react-navigation/native';
import { BooksContext } from '../../context/booksContext';

import Book from '../../components/Book';
import Header from '../../components/Header';
import LoadMoreButton from '../../components/LoadMoreButton';

import { ListContainer } from './styles';
import { IParams } from '../../interfaces';

const List: React.FC = () => {
  const [maxResults, setMaxResults] = useState(15);
  const { params } = useRoute<RouteProp<IParams, 'List'>>();
  const { booksData, handleGetBooks } = useContext(BooksContext);

  const handleLoadMore = () => {
    setMaxResults(prevState => prevState + 5);
  };

  const renderLoadMoreButton = () => {
    if (maxResults >= 40) {
      return <></>;
    }
    return <LoadMoreButton onPress={handleLoadMore} />;
  };

  useEffect(() => {
    handleGetBooks(params.searchTerm, maxResults);
  }, [maxResults]);

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
        ListFooterComponent={renderLoadMoreButton}
      />
    </ListContainer>
  );
};

export default List;
