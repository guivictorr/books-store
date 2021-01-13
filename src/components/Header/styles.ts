import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 70px;
  padding: 0 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 26px;
  font-family: 'Ubuntu_400Regular';
`;

export const HeaderInput = styled.TextInput`
  background-color: #f5f5f5;
  flex: 1;
  margin: 0 20px;
  font-family: 'Ubuntu_400Regular';
  font-size: 22px;
  padding: 8px;
  border-radius: 4px;
`;
