import React from 'react';
import { View, Text } from 'react-native';

const Home: React.FC = () => (
  <View
    style={{
      backgroundColor: '#010101',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text style={{ color: '#fff', fontSize: 32, fontFamily: 'Ubuntu_700Bold' }}>
      Hello World!
    </Text>
  </View>
);

export default Home;
