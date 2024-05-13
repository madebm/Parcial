import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import BuyScreen from '../screen/BuyScreen';
import HomeScreen from '../screen/HomeScreen';
import SellScreen from '../screen/SellScreen';

const Stack = createStackNavigator();

export const HomeStackNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle='dark-content' />
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='BuyScreen' component={BuyScreen} options={{ headerShown: true, headerTitle: '' }} />
        <Stack.Screen name='SellScreen' component={SellScreen} options={{ headerShown: true, headerTitle: '' }} />
      </Stack.Navigator>
    </>
  );
};
