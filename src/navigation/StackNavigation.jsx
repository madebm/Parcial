import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import { TabNavigation } from './TabNavigation';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor={'#FF3352'} />
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
};
