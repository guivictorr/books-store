import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const MainStackNavigation: React.FC = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default MainStackNavigation;
