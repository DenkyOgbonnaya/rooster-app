import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



import BottomTab from './BottomTab';
import { DASHBOARD_SCREEN, SPLASH_SCREEN } from './constants';
import { RootStackParamList } from './types/root.type';
import Splash from '../screens/splash';

export const Navigations = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Navigator = Stack.Navigator;
  const Screen = Stack.Screen;
  
  return (
    <Navigator
      initialRouteName={SPLASH_SCREEN}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTintColor: "#717680",
      }}>
      <Screen
        name={SPLASH_SCREEN}
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
     
      <Screen
        name={DASHBOARD_SCREEN}
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default Navigations;