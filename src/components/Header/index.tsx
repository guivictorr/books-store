import React, { useContext, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { HeaderContainer, HeaderTitle, HeaderInput } from './styles';
import { BooksContext } from '../../context/booksContext';

const Header: React.FC = () => {
  const { handleGetBooks, currentSearch } = useContext(BooksContext);
  const [isSearching, setIsSearching] = useState(false);
  const [inputText, setInputText] = useState('');
  const { goBack, navigate } = useNavigation();

  const handleCustomSearch = async () => {
    if (!isSearching) {
      setIsSearching(true);
      return;
    }

    if (!inputText) {
      setIsSearching(false);
      return;
    }

    await handleGetBooks(inputText);
    setInputText('');
    setIsSearching(false);
    navigate('List');
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
        <HeaderTitle numberOfLines={1}>{currentSearch}</HeaderTitle>
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
