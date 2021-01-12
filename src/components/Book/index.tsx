import React from 'react';
import { BookContainer, BookImage } from './styles';
import { BookProps } from '../../interfaces';

const Book: React.FC<BookProps> = ({ imageUrl }) => (
  <BookContainer>
    <BookImage
      resizeMode="cover"
      source={{
        uri: imageUrl,
      }}
    />
  </BookContainer>
);

export default Book;
