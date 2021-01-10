import React from 'react';

import { SubjectContainer, SubjectTitle } from './styles';

interface SubjectProps {
  title: string;
}

const Subject: React.FC<SubjectProps> = ({ title }) => (
  <SubjectContainer activeOpacity={0.9}>
    <SubjectTitle>{title}</SubjectTitle>
  </SubjectContainer>
);

export default Subject;
