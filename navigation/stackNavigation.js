import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigation} from './tabNavigation';
import IntroView from '../views/IntroView';
import InitScreen from '../views/InitScreen';
import AnimalCategoryView from '../views/AnimalCategoryView';
import SubCategoryView from '../views/SubCategoryView';
import ScanResultView from '../views/ScanResultView';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="init">
      <Stack.Screen name="init" component={InitScreen} />
      <Stack.Screen name="intro" component={IntroView} />
      <Stack.Screen name="tab" component={TabNavigation} />
      <Stack.Screen name="category" component={AnimalCategoryView} />
      <Stack.Screen name="subCategory" component={SubCategoryView} />
      <Stack.Screen name="scanResult" component={ScanResultView} />
    </Stack.Navigator>
  );
};
