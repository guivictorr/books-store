import { useRef } from 'react';
import { Animated } from 'react-native';

const useHomeAnimations = () => {
  const HEADER_MAX_HEIGHT = 350;
  const HEADER_MIN_HEIGHT = 0;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const scrollY = useRef(new Animated.Value(0)).current;

  const welcomeTranslateX = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const welcomeOpacityAnimation = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 12, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.4, 0],
  });

  return {
    HEADER_MAX_HEIGHT,
    welcomeTranslateX,
    welcomeOpacityAnimation,
    scrollY,
  };
};

export default useHomeAnimations;
