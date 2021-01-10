import React from 'react';
import { Animated } from 'react-native';

import {
  HomeContainer,
  WelcomeContainer,
  WelcomeText,
  HomeHeaderContainer,
  HomeHeaderTitle,
} from './styles';

import Subject from '../../components/Subject';
import useHomeAnimations from './useHomeAnimations';

const subjects = [
  { title: 'Romantic' },
  { title: 'Fairytale' },
  { title: 'Science' },
  { title: 'Action' },
  { title: 'History' },
  { title: 'Biography' },
  { title: 'Health' },
  { title: 'Economy' },
  { title: 'dsadsa' },
  { title: 'adsad' },
  { title: 'dsadsa' },
  { title: 'sadsad' },
  { title: 'sadsa' },
  { title: 'dsadas' },
  { title: 'Econdsadasomy' },
];

const Home: React.FC = () => {
  const {
    HEADER_MAX_HEIGHT,
    welcomeOpacityAnimation,
    scrollY,
    welcomeTranslateX,
  } = useHomeAnimations();

  return (
    <HomeContainer>
      <HomeHeaderContainer>
        <HomeHeaderTitle>The Books Basement</HomeHeaderTitle>
      </HomeHeaderContainer>
      <WelcomeContainer
        style={{
          transform: [{ translateX: welcomeTranslateX }],
          opacity: welcomeOpacityAnimation,
          height: HEADER_MAX_HEIGHT,
        }}
      >
        <WelcomeText>Welcome</WelcomeText>
        <WelcomeText>Pick a subject!</WelcomeText>
      </WelcomeContainer>
      <Animated.FlatList
        data={subjects}
        renderItem={({ item }) => <Subject title={item.title} />}
        keyExtractor={item => item.title}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 150 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      />
    </HomeContainer>
  );
};

export default Home;
