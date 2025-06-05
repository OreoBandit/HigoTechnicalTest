import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {StackNavigation} from './navigation/stackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {RootContextProvider} from './context/rootContext';
function App() {
  return (
    <NavigationContainer>
      <RootContextProvider>
        <StackNavigation />
      </RootContextProvider>
    </NavigationContainer>
  );
}
export default App;
