import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { ItemFormScreen } from '../screens/ItemFormScreen';
import {View,Image,TouchableOpacity} from 'react-native';
import {icons} from "../utils/icons";
import {colors} from "../utils/colors";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomNavigator = ()=>{
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: colors.black,
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
          iconName = 'profile';
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
      component={HomeScreen}
      
      options={{
        tabBarLabel: 'Home',
      }}
      />
      <Tab.Screen 
      name="Add" 
      component={ItemFormScreen}
      options={{
        tabBarLabel: 'Add Item',
      }}
      />
      <Tab.Screen 
      name="Profile" 
      component={ItemFormScreen}
      options={{
        tabBarLabel: 'Profile',
      }}
      />
      <Tab.Screen 
      name="Message" 
      component={ItemFormScreen}
      options={{
        tabBarLabel: 'Message',
      }}
      />
    </Tab.Navigator>
  );
}

