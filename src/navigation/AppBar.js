import React from "react"
import { Appbar } from "react-native-paper";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackScreen, ItemStackScreen } from "./DrawerNavigation";
import { BottomNavigator } from "./BottomNavigator";
import { View } from "react-native";
import { LoginScreen } from "../screens/LoginScreen/LoginScreen";

const Drawer = createDrawerNavigator();
export const DrawerNav = () => {
    return (
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen
          name="Login"
          component={BottomNavigator}
          options={{ drawerLabel: 'Login' }}
        />
       
      </Drawer.Navigator>
    );
  }
export const AppNavigation = () => {

    return(
        <View>
        
        </View>
     
    )
}


