import React from 'react';
import { FlatList } from 'react-native';

import {
  HomeContainer,
  HomeHeader,
  HomeHeaderTitle,
  WelcomeContainer,
  WelcomeText,
} from './styles';

import Subject from '../../components/Subject';

const subjects = [
  { title: 'Romantic' },
  { title: 'Fairytale' },
  { title: 'Science' },
  { title: 'Action' },
  { title: 'History' },
  { title: 'Biography' },
  { title: 'Health' },
  { title: 'Economy' },
  { title: 'Economy' },
  { title: 'Economy' },
  { title: 'Economy' },
  { title: 'Economy' },
  { title: 'Economy' },
  { title: 'Economy' },
  { title: 'Economy' },
  { title: 'Economy' },
  { title: 'Economy' },
  { title: 'Economy' },
  { title: 'Economy' },
  { title: 'Economy' },
];

const Home: React.FC = () => (
  <HomeContainer>
    <HomeHeader>
      <HomeHeaderTitle>The Book Basement</HomeHeaderTitle>
    </HomeHeader>
    <WelcomeContainer>
      <WelcomeText>Welcome</WelcomeText>
      <WelcomeText>Pick a subject!</WelcomeText>
    </WelcomeContainer>
    <FlatList
      data={subjects}
      renderItem={({ item }) => <Subject title={item.title} />}
      keyExtractor={item => item.title}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  </HomeContainer>
);

export default Home;
