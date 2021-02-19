import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { FavoriteButtonProps } from '../../interfaces';

export const FavoriteButtonContainer = styled(RectButton)<FavoriteButtonProps>`
  background-color: ${({ isFavorite }) => (isFavorite ? 'grey' : '#ff3f4a')};
  border-radius: 50px;
  padding: 5px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
