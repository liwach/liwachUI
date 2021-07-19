import React from 'react'
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { ExchangeScreen} from './ExchangeScreen'
import {PostScreen}  from "./PostScreen"

import {RequestScreen} from './RequestScreen'
import { colors } from '../../utils/colors';

const Tab = createMaterialTopTabNavigator();

export const ProfileScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      tabBarOptions={{
        activeTintColor: colors.black,
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: colors.white },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostScreen}
        options={{ tabBarLabel: 'Posts' }}
      />
      <Tab.Screen
        name="Requests"
        component={RequestScreen}
        options={{ tabBarLabel: 'Requests' }}
      />
      <Tab.Screen
        name="Exchanges"
        component={ExchangeScreen}
        options={{ tabBarLabel: 'Exchanges' }}
      />
    </Tab.Navigator>
  );
}
