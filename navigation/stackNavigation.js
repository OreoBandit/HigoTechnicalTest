import {createNativeStackNavigator} from '@react-navigation/native-stack';
import introView from '../views/introView';
import initScreen from '../views/initScreen';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="init">
      <Stack.Screen name="init" component={initScreen} />
      <Stack.Screen name="intro" component={introView} />
    </Stack.Navigator>
  );
};
