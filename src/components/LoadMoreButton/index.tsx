import React, { useContext } from 'react';
import { BooksContext } from '../../context/booksContext';
import { LoadMoreButtonProps } from '../../interfaces';
import { LoadMoreButtonContainer, LoadMoreText } from './styles';

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ searchTerm }) => {
  const { handleLoadMore, loadMoreNumber } = useContext(BooksContext);

  if (loadMoreNumber >= 40) {
    return <></>;
  }

  return (
    <LoadMoreButtonContainer onPress={() => handleLoadMore(searchTerm)}>
      <LoadMoreText>Load More</LoadMoreText>
    </LoadMoreButtonContainer>
  );
};

export default LoadMoreButton;
