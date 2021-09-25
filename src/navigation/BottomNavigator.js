import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import {View,Image,TouchableOpacity} from 'react-native';
import {icons} from "../utils/icons";
import {colors} from "../utils/colors";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { createStore } from "redux";
import { itemReducer } from "../reducers/items";
import { Provider } from 'react-redux';
import { HomeStackScreen, MessageStackScreen, ProductStackScreen, ProfileStackScreen, RequestScreenStack } from './DrawerNavigation';
import  Icon  from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomNavigator = ()=>{
  return (
   
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: colors.water,
      inactiveTintColor:colors.flord,
      
      style:{
        fontWeight:'bold',
        borderTopWidth: 0,
        backgroundColor: colors.white,
        elevation:0,
        zIndex:0
      },
      keyboardHidesTabBar: true
      
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        const color = focused ? colors.water : colors.flord_intro;
        if (route.name === 'Home') {
          iconName = 'home-outline';
        } 
        else if (route.name === 'Request') {
          iconName = 'list';
        }
        else if (route.name === 'Profile') {
          iconName = 'list';
        }
        else if (route.name === 'Message') {
          iconName = 'mail-outline';
        }   
        return <Icon name={iconName} size={23} color={color} />;
      },
    })}

    barStyle={{
      backgroundColor: colors.primary,
      height: 50,
      justifyContent: 'center',
    }}
    activeColor={colors.flord}
    inactiveColor={colors.flord}
    >
      <Tab.Screen 
      name="Home" 
      component={HomeStackScreen}
      
      options= {{
        tabBarLabel: 'Home',
      }}
      />
     
      <Tab.Screen 
      name="Profile" 
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Posts',
      }}
      />
    
        <Tab.Screen 
      name="Request" 
      component={RequestScreenStack}
      options={{
        tabBarLabel: 'Requests',
      }}
      />
    </Tab.Navigator>
   
  );
}

