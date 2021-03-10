import React, { useState } from 'react';
import { Animated, LayoutChangeEvent } from 'react-native';

import subjects from '../../utils/subjects';
import useScrollAnimation from '../../hooks/useScrollAnimation';

import Subject from '../../components/Subject';

import {
  HomeContainer,
  WelcomeContainer,
  WelcomeText,
  HomeHeaderContainer,
  HomeHeaderTitle,
} from './styles';

const Home: React.FC = () => {
  const [headerMaxHeight, setHeaderMaxHeight] = useState(200);
  const { scrollY, opacityAnimation, translateX } = useScrollAnimation(
    headerMaxHeight,
  );

  const flatListStyles = {
    paddingTop: headerMaxHeight,
    paddingHorizontal: 15,
  };

  const welcomeContainerStyles = {
    transform: [{ translateX }],
    opacity: opacityAnimation,
  };

  const handleWelcomeContainerHeight = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setHeaderMaxHeight(height);
  };

  return (
    <HomeContainer>
      <HomeHeaderContainer>
        <HomeHeaderTitle>The Books Basement</HomeHeaderTitle>
      </HomeHeaderContainer>
      <WelcomeContainer
        onLayout={handleWelcomeContainerHeight}
        style={welcomeContainerStyles}
      >
        <WelcomeText>Welcome</WelcomeText>
        <WelcomeText>Pick a subject!</WelcomeText>
      </WelcomeContainer>
      <Animated.FlatList
        data={subjects}
        renderItem={({ item }) => <Subject title={item.title} />}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={flatListStyles}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      />
    </HomeContainer>
  );
};

export default Home;
