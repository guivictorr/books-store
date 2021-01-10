import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigation from './MainStackNavigation';

const Routes: React.FC = () => (
  <NavigationContainer>
    <MainStackNavigation />
  </NavigationContainer>
);

export default Routes;
