import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import List from '../pages/List';
import Details from '../pages/Details';

const MainStackNavigation = (): ReactElement => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="List" component={List} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
};

export default MainStackNavigation;
