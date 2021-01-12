import React from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';

import data from '../../utils/subjects';
import { ListPageProps } from '../../interfaces';

import Book from '../../components/Book';
import Header from '../../components/Header';

import { ListContainer } from './styles';

const List: React.FC = () => {
  const {
    params: { subjectTitle },
  } = useRoute<ListPageProps>();

  return (
    <ListContainer>
      <Header title={subjectTitle} />
      <FlatList
        data={data}
        renderItem={() => <Book />}
        keyExtractor={item => item.title}
        numColumns={3}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </ListContainer>
  );
};

export default List;
