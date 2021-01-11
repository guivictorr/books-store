import { useRef } from 'react';
import { Animated } from 'react-native';

const useHomeAnimations = (scrollDistance: number) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateX = scrollY.interpolate({
    inputRange: [0, scrollDistance],
    outputRange: [0, -scrollDistance],
    extrapolate: 'clamp',
  });

  const opacityAnimation = scrollY.interpolate({
    inputRange: [0, scrollDistance / 12, scrollDistance],
    outputRange: [1, 0.4, 0],
  });

  return {
    translateX,
    opacityAnimation,
    scrollY,
  };
};

export default useHomeAnimations;
