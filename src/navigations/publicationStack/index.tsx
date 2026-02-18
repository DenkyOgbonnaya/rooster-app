import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import {  PUBLICATIONS_DASHBOARD_SCREEN } from '../constants';

import { PublicationStackParamList } from '../types/publications.type';
import Publications from '../../screens/publications';

export default function PublicationStack() {
  const Stack = createNativeStackNavigator<PublicationStackParamList>();
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
      initialRouteName={PUBLICATIONS_DASHBOARD_SCREEN}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTintColor: "#717680",
      }}>
      <Screen
        name={PUBLICATIONS_DASHBOARD_SCREEN}
        component={Publications}
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