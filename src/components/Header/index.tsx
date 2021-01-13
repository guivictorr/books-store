import React, { useContext, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import { HeaderProps } from '../../interfaces';

import { HeaderContainer, HeaderTitle, HeaderInput } from './styles';
import { BooksContext } from '../../context/booksContext';

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { handleGetBooks } = useContext(BooksContext);
  const [isSearching, setIsSearching] = useState(false);
  const [inputText, setInputText] = useState(title);
  const { goBack } = useNavigation();

  const handleCustomSearch = async () => {
    if (!isSearching) {
      setIsSearching(true);
      return;
    }

    await handleGetBooks(inputText);
    setIsSearching(false);
  };

  return (
    <HeaderContainer>
      <BorderlessButton onPress={() => goBack()}>
        <Feather name="arrow-left" size={25} color="#0f0f0f" />
      </BorderlessButton>
      {isSearching ? (
        <HeaderInput
          placeholder="What are you searching ?"
          onChangeText={text => setInputText(text)}
        />
      ) : (
        <HeaderTitle numberOfLines={1}>{inputText}</HeaderTitle>
      )}
      <BorderlessButton onPress={handleCustomSearch}>
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
