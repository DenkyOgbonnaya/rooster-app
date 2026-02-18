import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { HOME_STACK, PROFILE_STACK, PUBLICATION_STACK, ROOSTER_STACK } from './constants';
import { BookIcon, CalendarIcon, HomeIcon, UserIcon } from '../assets';
import HomeStack from './homeStack';
import RoosterStack from './roosterStack';
import PublicationStack from './publicationStack';
import ProfileStack from './profileStack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {

  return (
    <Tab.Navigator
      initialRouteName={HOME_STACK}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabStyle,
        tabBarButton: props => (
          <Pressable {...props} android_ripple={{color: "#FFFFFF"}} />
        ),
      }}>
      <Tab.Screen
        name={HOME_STACK}
        component={HomeStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              className={`text-center mt-1  text-sm font-medium font-label_medium  ${
                focused ? 'text-primary ' : ' text-inactive '
              } `}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View style={[styles.tab]}>
                {focused && <View style={styles.activeBorder} />}
                <HomeIcon
                  color={focused ? "#5653FC" : "#717680"}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={ROOSTER_STACK}
        component={RoosterStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              className={`text-center mt-1 text-sm font-medium font-label_medium  ${
                focused ? 'text-primary ' : ' text-inactive '
              } `}>
              Rooster
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View style={[styles.tab]}>
                {focused && <View style={styles.activeBorder} />}
                <CalendarIcon
                  color={focused ? "#5653FC" : "#717680"}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={PUBLICATION_STACK}
        component={PublicationStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              className={`text-center mt-1 text-sm font-medium font-label_medium  ${
                focused ? 'text-primary ' : ' text-inactive '
              } `}>
              Publications
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View style={[styles.tab]}>
                {focused && <View style={styles.activeBorder} />}
                <BookIcon
                 color={focused ? "#5653FC" : "#717680"}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name={PROFILE_STACK}
        component={ProfileStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              className={`text-center mt-1  text-sm font-medium font-label_medium  ${
                focused ? 'text-primary ' : ' text-inactive '
              } `}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View style={[styles.tab]}>
                {focused && <View style={styles.activeBorder} />}
                <UserIcon
                 color={focused ? "#5653FC" : "#717680"}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  tabStyle: {
    backgroundColor: "#FFFFFF",
    zIndex: 10,
    minHeight: 85,
    borderTopWidth: 1,
    borderColor: '#6E718340',
    paddingBottom: 10,
    paddingTop: 10,
  },
   activeBorder: {
    position: 'absolute',
    top: -18,
    height: 4, 
    width: 64, 
    backgroundColor: '#5653FC', 
    
    borderBottomLeftRadius: 2, 
    borderBottomRightRadius: 2,
  },
});