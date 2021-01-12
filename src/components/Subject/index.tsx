import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { SubjectProps } from '../../interfaces';

import { SubjectContainer, SubjectTitle } from './styles';

const Subject: React.FC<SubjectProps> = ({ title }) => {
  const { navigate } = useNavigation();

  return (
    <SubjectContainer
      activeOpacity={0.9}
      onPress={() => navigate('List', { subjectTitle: title })}
    >
      <SubjectTitle>{title}</SubjectTitle>
    </SubjectContainer>
  );
};

export default Subject;
