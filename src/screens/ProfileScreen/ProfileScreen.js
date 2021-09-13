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

export const ProfileScreen = ({navigation}) => {
  return (
     <PostScreen navigation={navigation}/>
  );
}
