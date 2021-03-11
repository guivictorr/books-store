import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SubjectProps } from '../../types';

import { SubjectContainer, SubjectTitle } from './styles';

const Subject = ({ title }: SubjectProps): ReactElement => {
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
