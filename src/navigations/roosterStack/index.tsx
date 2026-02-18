import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';



import {  ROOSTER_DASHBOARD_SCREEN } from '../constants';
import { RoosterStackParamList } from '../types/rooster.type';
import Rooster from '../../screens/rooster';

export default function RoosterStack() {
  const Stack = createNativeStackNavigator<RoosterStackParamList>();
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
      initialRouteName={ROOSTER_DASHBOARD_SCREEN}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTintColor: "#717680",
      }}>
      <Screen
        name={ROOSTER_DASHBOARD_SCREEN}
        component={Rooster}
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