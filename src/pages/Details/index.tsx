import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { DetailsPageProps } from '../../interfaces';

import { Container } from './styles';

const Details: React.FC = () => {
  const {
    params: { bookId },
  } = useRoute<DetailsPageProps>();

  return (
    <Container>
      <Text style={{ color: '#000' }}>{bookId}</Text>
    </Container>
  );
};

export default Details;
