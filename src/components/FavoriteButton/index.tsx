import React, { useContext, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { BooksContext } from '../../context/booksContext';

import { FavoriteButtonContainer } from './styles';

const FavoriteButton: React.FC<{ bookId: string }> = ({ bookId }) => {
  const { handleFavoriteBooks, handleIsFavorite } = useContext(BooksContext);

  const [isFavorite, setIsFavorite] = useState(handleIsFavorite(bookId));

  const handleAddFavoriteBook = () => {
    handleFavoriteBooks(bookId);
    setIsFavorite(!isFavorite);
  };

  return (
    <FavoriteButtonContainer
      onPress={handleAddFavoriteBook}
      isFavorite={isFavorite}
    >
      <Feather
        name={isFavorite ? 'slash' : 'heart'}
        color="#f5f5f5"
        size={16}
      />
    </FavoriteButtonContainer>
  );
};

export default FavoriteButton;
