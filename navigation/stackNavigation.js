import {createNativeStackNavigator} from '@react-navigation/native-stack';
import introView from '../views/introView';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="intro">
      <Stack.Screen name="intro" component={introView} />
    </Stack.Navigator>
  );
};
