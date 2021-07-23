import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import {View,Image,TouchableOpacity} from 'react-native';
import {icons} from "../utils/icons";
import {colors} from "../utils/colors";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { createStore } from "redux";
import { itemReducer } from "../reducers/items";
import { Provider } from 'react-redux';
import { HomeStackScreen, MessageStackScreen, ProductStackScreen, ProfileStackScreen } from './DrawerNavigation';

const Tab = createBottomTabNavigator();

export const BottomNavigator = ()=>{
  return (
    <Provider >
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: colors.black,
      style:{
        borderTopWidth: 0,
        backgroundColor: "transparent",
        elevation:0,
      }
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        const color = focused ? colors.black : colors.grey;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Add') {
          iconName = 'plus';
        }
        else if (route.name === 'Profile') {
          iconName = 'idcard';
        }
        else if (route.name === 'Message') {
          iconName = 'mail';
        }   
        return <AntDesign name={iconName} size={23} color={color} />;
      },
    })}

    barStyle={{
      backgroundColor: colors.black,
      height: 50,
      justifyContent: 'center',
    }}
    activeColor={colors.light_grey}
    inactiveColor={colors.white}
    >
      <Tab.Screen 
      name="Home" 
      component={HomeStackScreen}
      
      options={{
        tabBarLabel: 'Home',
      }}
      />
      <Tab.Screen 
      name="Add" 
      component={ProductStackScreen}
      options={{
        tabBarLabel: 'Add Item',
      }}
      />
      <Tab.Screen 
      name="Profile" 
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
      }}
      />
      <Tab.Screen 
      name="Message" 
      component={MessageStackScreen}
      options={{
        tabBarLabel: 'Message',
      }}
      />
    </Tab.Navigator>
    </Provider>
  );
}

