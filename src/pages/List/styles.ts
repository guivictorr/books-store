import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LoadMoreButtonProps {
  maxResults: number;
}

export const ListContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #ffe524;
`;

export const LoadMoreButton = styled.TouchableOpacity<LoadMoreButtonProps>`
  ${({ maxResults }) =>
    maxResults < 40
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0f0f0f;
          border-radius: 50px;
          width: 100px;
          height: 40px;
          margin: 50px;
        `
      : css`
          display: none;
        `};
`;

export const LoadMoreText = styled.Text`
  color: #ffe524;
  font-family: 'Ubuntu_400Regular';
`;
