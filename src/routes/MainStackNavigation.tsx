import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import List from '../pages/List';

const MainStackNavigation: React.FC = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="List" component={List} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default MainStackNavigation;
