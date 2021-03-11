import React, { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { LoadMoreButtonContainer, LoadMoreText } from './styles';

const LoadMoreButton = ({ ...rest }: TouchableOpacityProps): ReactElement => (
  <LoadMoreButtonContainer {...rest}>
    <LoadMoreText>Load More</LoadMoreText>
  </LoadMoreButtonContainer>
);

export default LoadMoreButton;
