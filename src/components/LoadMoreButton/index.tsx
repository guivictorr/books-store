import React, { useContext } from 'react';
import { BooksContext } from '../../context/booksContext';
import { LoadMoreButtonContainer, LoadMoreText } from './styles';

const LoadMoreButton: React.FC = () => {
  const { handleLoadMore, loadMoreNumber } = useContext(BooksContext);

  if (loadMoreNumber >= 40) {
    return <></>;
  }

  return (
    <LoadMoreButtonContainer onPress={handleLoadMore}>
      <LoadMoreText>Load More</LoadMoreText>
    </LoadMoreButtonContainer>
  );
};

export default LoadMoreButton;
