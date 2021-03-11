import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { SubjectProps } from '../../interfaces';

import { SubjectContainer, SubjectTitle } from './styles';

const Subject: React.FC<SubjectProps> = ({ title }) => {
  const { navigate } = useNavigation();

  const handleGetSubjectBooks = async () => {
    navigate('List', { searchTerm: title });
  };

  return (
    <SubjectContainer activeOpacity={0.9} onPress={handleGetSubjectBooks}>
      <SubjectTitle>{title}</SubjectTitle>
    </SubjectContainer>
  );
};

export default Subject;
