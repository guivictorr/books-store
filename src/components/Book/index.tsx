import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BookContainer, BookImage } from './styles';
import { BookProps } from '../../interfaces';

const Book: React.FC<BookProps> = ({ imageUrl, bookId }) => {
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
