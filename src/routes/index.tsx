import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigation from './MainStackNavigation';

const Routes = (): ReactElement => (
  <NavigationContainer>
    <MainStackNavigation />
  </NavigationContainer>
);

export default Routes;
