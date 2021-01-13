import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import { HeaderProps } from '../../interfaces';

import { HeaderContainer, HeaderTitle, HeaderInput } from './styles';

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [inputText, setInputText] = useState('');
  const { goBack } = useNavigation();

  return (
    <HeaderContainer>
      <BorderlessButton onPress={() => goBack()}>
        <Feather name="arrow-left" size={25} color="#0f0f0f" />
      </BorderlessButton>
      {isSearching ? (
        <HeaderInput
          placeholder="What are you searching ?"
          value={inputText}
          onChangeText={text => setInputText(text)}
        />
      ) : (
        <HeaderTitle>{title}</HeaderTitle>
      )}
      <BorderlessButton onPress={() => setIsSearching(!isSearching)}>
        <Feather
          name={isSearching ? 'check' : 'search'}
          size={25}
          color="#0f0f0f"
        />
      </BorderlessButton>
    </HeaderContainer>
  );
};

export default Header;
