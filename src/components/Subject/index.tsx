import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SubjectProps } from '../../interfaces';

import { SubjectContainer, SubjectTitle } from './styles';
import { BooksContext } from '../../context/booksContext';

const Subject: React.FC<SubjectProps> = ({ title }) => {
  const { navigate } = useNavigation();
  const { handleGetBooks, setLoadMoreNumber } = useContext(BooksContext);

  const handleGetSubjectBooks = async () => {
    setLoadMoreNumber(20);
    await handleGetBooks(title);
    navigate('List');
  };

  return (
    <SubjectContainer activeOpacity={0.9} onPress={handleGetSubjectBooks}>
      <SubjectTitle>{title}</SubjectTitle>
    </SubjectContainer>
  );
};

export default Subject;
