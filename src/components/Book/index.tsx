import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BookContainer, BookImage } from './styles';
import { BookProps } from '../../types';

const Book = ({ imageUrl, bookId }: BookProps): ReactElement => {
  const { navigate } = useNavigation();
  return (
    <BookContainer onPress={() => navigate('Details', { bookId })}>
      <BookImage
        resizeMode="cover"
        source={{
          uri: imageUrl,
        }}
      />
    </BookContainer>
  );
};

export default Book;
