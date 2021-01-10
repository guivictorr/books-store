import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';

import Routes from './routes';

const Main: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#0f0f0f" />
      <Routes />
    </>
  );
};

export default Main;
