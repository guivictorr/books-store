import React from 'react';
import Subject from '../../components/Subject';

import {
  HomeContainer,
  HomeHeader,
  HomeHeaderTitle,
  WelcomeContainer,
  WelcomeText,
} from './styles';

const Home: React.FC = () => (
  <HomeContainer>
    <HomeHeader>
      <HomeHeaderTitle>The Book Basement</HomeHeaderTitle>
    </HomeHeader>
    <WelcomeContainer>
      <WelcomeText>Welcome</WelcomeText>
      <WelcomeText>Pick a subject!</WelcomeText>
    </WelcomeContainer>
    <Subject />
  </HomeContainer>
);

export default Home;
