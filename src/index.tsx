import React, { ReactElement } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';

import Routes from './routes';
import AppProvider from './context';

const Main = (): ReactElement => {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#0f0f0f" />
      <AppProvider>
        <Routes />
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default Main;
