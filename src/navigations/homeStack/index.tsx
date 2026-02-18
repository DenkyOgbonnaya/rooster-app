import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';


import { HomeStackParamList } from '../types/home.type';
import { HOME_DASHBOARD_SCREEN } from '../constants';
import Home from '../../screens/home';

export default function HomeStack() {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  const Navigator = Stack.Navigator;
  const Screen = Stack.Screen;


  const screenOptions = {
    headerShown: false,
    headerStyle: styles.headerStyle,
    title: '',
    headerBackTitleVisible: true,
    headerTintColor: "#717680",
  };

  return (
    <Navigator
      initialRouteName={HOME_DASHBOARD_SCREEN}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTintColor: "#717680",
      }}>
      <Screen
        name={HOME_DASHBOARD_SCREEN}
        component={Home}
        options={{
          ...screenOptions,
          headerShown: false,
        }}
      />

   
    </Navigator>
  );
}
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FFFFFF",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});