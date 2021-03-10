import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const BookDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 15px;
  background-color: #ffe524;
`;

export const BookDetailsContent = styled.View`
  justify-content: space-between;
  flex: 1;
  margin-left: 20px;
`;

export const BookCover = styled.View`
  align-items: center;
  justify-content: center;
`;

export const BookImage = styled.Image`
  width: 90px;
  height: 130px;
`;

export const BookTitle = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-size: 22px;
  color: #0f0f0f;
`;

export const BookAuthor = styled.Text`
  color: #5d5d5d;
  opacity: 0.7;
  font-size: 15px;
  font-family: 'Ubuntu_400Regular';
`;

export const BookPrice = styled.Text`
  color: #0f0f0f;
  font-size: 28px;
  font-family: 'Ubuntu_700Bold';
  margin-top: 20px;
`;

export const BookDescriptionContainer = styled.View`
  flex: 1;
`;

export const BookDescription = styled.Text`
  color: grey;
  font-family: 'Ubuntu_400Regular';
  font-size: 20px;
  line-height: 30px;
  width: 100%;
  padding: 20px;
`;

export const BookPages = styled.Text`
  font-family: 'Ubuntu_400Regular';
  color: #5d5d5d;
  opacity: 0.7;
  font-size: 16px;
  margin-top: 20px;
`;

export const BookButtons = styled.View`
  flex-direction: row;
  align-self: flex-end;
  margin: 10px 15px 0 0;
`;

export const BookBuyButton = styled(RectButton)`
  background-color: #3fa3ff;
  border-radius: 50px;
  width: 120px;
  height: 40px;
  padding: 5px 20px;
  align-items: center;
  justify-content: center;
`;

export const BookBuyButtonText = styled.Text`
  font-family: 'Ubuntu_500Medium';
  color: #f5f5f5;
`;
