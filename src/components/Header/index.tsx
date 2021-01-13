import React from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import { HeaderProps } from '../../interfaces';

import { HeaderContainer, HeaderTitle } from './styles';

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { goBack } = useNavigation();
  return (
    <HeaderContainer>
      <BorderlessButton onPress={() => goBack()}>
        <Feather name="arrow-left" size={25} color="#0f0f0f" />
      </BorderlessButton>
      <HeaderTitle>{title}</HeaderTitle>
      <BorderlessButton>
        <Feather name="search" size={25} color="#0f0f0f" />
      </BorderlessButton>
    </HeaderContainer>
  );
};

export default Header;
