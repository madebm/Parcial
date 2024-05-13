import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SharesScreen from '../screen/SharesScreen';
import { HomeStackNavigation } from './HomeStackNavigation';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='HomeStackNavigation'
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name='home' size={27} color={focused ? '#FF3352' : '#ccc'} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='SharesScreen'
        component={SharesScreen}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name='person' size={27} color={focused ? '#FF3352' : '#ccc'} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
