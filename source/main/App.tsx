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
import { Dashboard, Login, Splash, Term } from '../screen';
import { View } from 'react-native';
import Reactotron from './ReactoronConfig'
import Constants from './Constants';
import styles from './styles';

enableScreens()
const Stack = createNativeStackNavigator();

export default function App() {
  const commonNavigationOption: any = {
    headerShown: false,
    gestureEnabled: true
  }

  Reactotron.log('App is loading');

  return (
    <View style={styles.flex1}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Constants.Screen.Splash} screenOptions={{
          contentStyle: {
            backgroundColor: Constants.Color.AppColor
          }
        }}>
          <Stack.Screen name={Constants.Screen.Splash} component={Splash} options={commonNavigationOption} />
          <Stack.Screen name={Constants.Screen.Login} component={Login} options={commonNavigationOption} />
          <Stack.Screen name={Constants.Screen.Term} component={Term} options={commonNavigationOption} />
          <Stack.Screen name={Constants.Screen.Dashboard} component={Dashboard} options={commonNavigationOption} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}