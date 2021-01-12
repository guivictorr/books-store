import React from 'react';
import { Animated } from 'react-native';

import subjects from '../../utils/subjects';
import useScrollAnimations from '../../hooks/useScrollAnimations';

import Subject from '../../components/Subject';

import {
  HomeContainer,
  WelcomeContainer,
  WelcomeText,
  HomeHeaderContainer,
  HomeHeaderTitle,
} from './styles';

const Home: React.FC = () => {
  const headerMaxHeight = 350;
  const { scrollY, opacityAnimation, translateX } = useScrollAnimations(
    headerMaxHeight,
  );

  return (
    <HomeContainer>
      <HomeHeaderContainer>
        <HomeHeaderTitle>The Books Basement</HomeHeaderTitle>
      </HomeHeaderContainer>
      <WelcomeContainer
        style={{
          transform: [{ translateX }],
          opacity: opacityAnimation,
          height: headerMaxHeight,
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
        contentContainerStyle={{
          paddingTop: headerMaxHeight - 170,
          alignItems: 'center',
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      />
    </HomeContainer>
  );
};

export default Home;
