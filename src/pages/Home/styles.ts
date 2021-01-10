import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #ffe524;
`;

export const HomeHeader = styled.View`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const HomeHeaderTitle = styled.Text`
  color: #0f0f0f;
  font-size: 28px;
  font-family: 'Ubuntu_500Medium';
`;

export const WelcomeContainer = styled.View`
  width: 100%;
  height: 200px;
  padding: 20px;
`;

export const WelcomeText = styled.Text`
  font-size: 56px;
  font-family: 'Ubuntu_700Bold';
`;
