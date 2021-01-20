import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';

export const DetailsContainer = styled(SafeAreaView)`
  background-color: #ffe524;
  flex: 1;
`;

export const DetailsMainContent = styled.View`
  height: auto;
  width: 100%;
  padding: 20px 15px;
`;

export const BookMainDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const BookImage = styled.Image`
  width: 100px;
  height: 140px;
`;

export const BookDetails = styled.View``;

export const BookTitle = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-size: 28px;
  width: 250px;
  line-height: 35px;
  color: #0f0f0f;
`;

export const BookAuthor = styled.Text`
  color: #5d5d5d;
  opacity: 0.7;
  font-size: 15px;
  font-family: 'Ubuntu_400Regular';
  width: 250px;
`;

export const BookPrice = styled.Text`
  color: #0f0f0f;
  font-size: 35px;
  font-family: 'Ubuntu_700Bold';
`;

export const BookDetailsFooter = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const DetailsDescription = styled.ScrollView`
  background-color: #e5e5e5;
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

export const DetailsMainContentFooter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const BookPages = styled.Text`
  font-family: 'Ubuntu_400Regular';
  color: #5d5d5d;
  opacity: 0.7;
  margin-left: 19px;
  font-size: 16px;
`;

export const BookDetailsButtons = styled.View`
  flex-direction: row;
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

export const BookFavoriteButton = styled(RectButton)`
  background-color: #ff3f4a;
  border-radius: 50px;
  padding: 5px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
