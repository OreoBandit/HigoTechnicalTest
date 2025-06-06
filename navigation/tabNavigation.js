import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from '../views/Homepage';
import AnimalScannerView from '../views/AnimalScannerView';
import {COLORS} from '../constants/colors';

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.brandOrange,
        tabBarInactiveTintColor: COLORS.disabled,
        tabBarLabelPosition: 'beside-icon', // Forces no vertical spacing
        tabBarIcon: () => null, // Required but neutralized
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          width: '100%',
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen name="homepage" component={Homepage} />
      <Tab.Screen name="Animal Scanner" component={AnimalScannerView} />
    </Tab.Navigator>
  );
};
