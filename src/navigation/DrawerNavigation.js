import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {addItemForm,addServiceForm,editItemForm, ItemOptionsScreen} from '../screens/ItemScreen'
import { HomeScreen } from "../screens/HomeScreen";
import { DetailScreen } from "../screens/DetailScreen/DetailScreen";
import { ProfileScreen } from "../screens/ProfileScreen/ProfileScreen";
import { MessageScreen } from "../screens/MessageScreen/MessageScreen";
import {colors} from "../utils/colors"

const ProductStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ItemStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MessageStack = createStackNavigator();


export const ProductStackScreen = () => {
  return(
    <ProductStack.Navigator
    screenOptions={{
        headerShown:true,
        gestureEnabled:true,
        headerStyle: { backgroundColor: colors.grey },
        headerTitleStyle:{color:'white'}
    }}>
    <ProductStack.Screen name="Choose Item" component={ItemOptionsScreen}/>
    <ProductStack.Screen name="Add Product" component={addItemForm}/>
    <ProductStack.Screen name="Add Service" component={addServiceForm}/>
    </ProductStack.Navigator>
  )

}

export const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator
        screenOptions={{
                headerShown:true,
                gestureEnabled:true,
                headerStyle: { backgroundColor: colors.grey },
                headerTitleStyle:{color:'white'}
            }}
        >
            <HomeStack.Screen name="Home" component={HomeScreen}/>
            <HomeStack.Screen name="Detail Screen" component={DetailScreen}/>
            <HomeStack.Screen name="Edit Item" component={editItemForm}/>
        </HomeStack.Navigator>
    )
}

export const ItemStackScreen = () => {
    return(
        <ItemStack.Navigator>
            
        </ItemStack.Navigator>
    )
}

export const ProfileStackScreen = () => {
    return(
        <ProfileStack.Navigator
        screenOptions={{
            headerShown:true,
            gestureEnabled:true,
            headerStyle: { backgroundColor: colors.grey },
            headerTitleStyle:{color:'white'}
        }}
        >
            <ProfileStack.Screen name="Profile" component={ProfileScreen}/>
        </ProfileStack.Navigator>
    )
}

export const MessageStackScreen = () => {
    return(
        <MessageStack.Navigator
        screenOptions={{
            headerShown:true,
            gestureEnabled:true,
            headerStyle: { backgroundColor: colors.grey },
            headerTitleStyle:{color:'white'}
        }}
        >
            <MessageStack.Screen name="Inbox" component={MessageScreen}/>
        </MessageStack.Navigator>
    )
}