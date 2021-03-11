import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { LoadMoreButtonContainer, LoadMoreText } from './styles';

const LoadMoreButton: React.FC<TouchableOpacityProps> = ({ ...rest }) => (
  <LoadMoreButtonContainer {...rest}>
    <LoadMoreText>Load More</LoadMoreText>
  </LoadMoreButtonContainer>
);

export default LoadMoreButton;
