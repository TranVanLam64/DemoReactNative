/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { Detail, Home } from '../screen';
import { SafeAreaView, View } from 'react-native';
import Reactotron from './ReactoronConfig'

enableScreens()
const Stack = createNativeStackNavigator();

export default function App() {
  const commonNavigationOption: any = {
    headerShown: false,
    gestureEnabled: true
  }

  Reactotron.log('App is loading');

  return (
    <View style={{flex: 1}}>
      <SafeAreaView></SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={commonNavigationOption} />
          <Stack.Screen name="Detail" component={Detail} options={commonNavigationOption} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}