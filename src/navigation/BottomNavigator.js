import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { ItemFormScreen } from '../screens/ItemFormScreen/ItemFormScreen';

const Tab = createBottomTabNavigator();

export const BottomNavigator = ()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add" component={ItemFormScreen} />
    </Tab.Navigator>
  );
}

