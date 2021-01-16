import { useRoute } from '@react-navigation/native';
import React from 'react';
import Header from '../../components/Header';
import { DetailsPageProps } from '../../interfaces';

import { DetailsContainer } from './styles';

const Details: React.FC = () => {
  const {
    params: { bookId },
  } = useRoute<DetailsPageProps>();

  return (
    <DetailsContainer>
      <Header />
    </DetailsContainer>
  );
};

export default Details;
