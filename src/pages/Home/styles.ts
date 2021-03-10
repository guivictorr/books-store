import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Animated } from 'react-native';

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #ffe524;
`;

export const HomeHeaderContainer = styled.View`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeHeaderTitle = styled.Text`
  color: #0f0f0f;
  font-size: 24px;
  font-family: 'Ubuntu_500Medium';
`;

export const WelcomeContainer = styled(Animated.View)`
  position: absolute;
  top: ${Constants.statusBarHeight + 70}px;
  left: 0;
  right: 0;
  width: 100%;
  padding: 20px;
`;

export const WelcomeText = styled.Text`
  font-size: 56px;
  font-family: 'Ubuntu_700Bold';
  color: #0f0f0f;
`;
