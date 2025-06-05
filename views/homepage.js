import {View, Text} from 'react-native';
import React from 'react';
import {useRootContext} from '../context/rootContext';

const Homepage = () => {
  const {user} = useRootContext();
  return (
    <View>
      <Text>{user ? user : 'homepage normal'}</Text>
    </View>
  );
};

export default Homepage;
