import React from "react";
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import {addItemForm,addServiceForm,editItemForm, ItemOptionsScreen} from '../screens/ItemScreen'
import { HomeScreen } from "../screens/HomeScreen";
import { DetailScreen } from "../screens/DetailScreen/DetailScreen";
import { ProfileScreen } from "../screens/ProfileScreen/ProfileScreen";
import { MessageScreen } from "../screens/MessageScreen/MessageScreen";
import {colors} from "../utils/colors"
import {DrawerButton} from "../screens/HomeScreen/component/DrawerButton"
import { Button, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NotificationScreen } from "../screens/NotificationScreen/NotificationScreen";
import { AccountScreen } from "../screens/AccountScreen/AccountScreen";
import { ItemDetailScreen } from "../screens/DetailScreen/ItemDetailScreen";

const ProductStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ItemStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MessageStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const AccountStack = createStackNavigator();


export const ProductStackScreen = () => {
  return(
    <ProductStack.Navigator
    screenOptions={{
        headerShown:true,
        gestureEnabled:true,
        headerStyle: { backgroundColor: colors.grey },
        headerTitleStyle:{color:'white' , alignSelf:'center'}
    }}>
    <ProductStack.Screen name="Choose Item" component={ItemOptionsScreen} />
    <ProductStack.Screen 
    options={{
        headerTitleStyle:{alignSelf:'center', marginRight:30,color:colors.white},
        
    }} 
    name="Add Product" component={addItemForm}/>
    <ProductStack.Screen name="Add Service" component={addServiceForm}/>
    </ProductStack.Navigator>
  )

}

export const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator
        screenOptions={({navigation})=>({
                headerShown:true,
                headerMode:'screen',
                gestureEnabled:true,
                headerStyle: { backgroundColor: colors.grey },
                headerTitleStyle:{color:'white', },
                headerRight: (props) => (
                    <AntDesign 
                    onPress={() => navigation.navigate('NotificationScreen')} 
                    style={styles.drawerButton} 
                    name="bells" 
                    size={30}/>

                  ),
                headerLeft: (props) => (
                    <AntDesign 
                    onPress={() => navigation.navigate('AccountScreen')} 
                    style={styles.leftDrawer} 
                    name="user"
                    size={30}/>

                  ),
            })}
        >
            <HomeStack.Screen options={{ title: 'Home' }} name="Home" component={HomeScreen}/>
            <HomeStack.Screen  name="Detail Screen" component={DetailScreen}/>
            <HomeStack.Screen  name="Single Item"  
             options={({ route, navigation }) => ({
                title: route.params.title,
                headerRight: () =>{

                },
                headerLeft: () =>{
                    return( <HeaderBackButton 
                        tintColor={colors.white}
                        onPress={()=>navigation.goBack()} 
                        
                        />)
                   
                }
                 })} 
                
                component={ItemDetailScreen}
                />
            <HomeStack.Screen  name="Edit Item" component={editItemForm}/>
            <HomeStack.Screen  name="AccountScreen" component={AccountScreen}/>
            <HomeStack.Screen  name="NotificationScreen" component={NotificationScreen}/>
        </HomeStack.Navigator>
    )
}


export const ProfileStackScreen = () => {
    return(
        <ProfileStack.Navigator
        screenOptions={{
            headerShown:true,
            gestureEnabled:true,
            headerStyle: { backgroundColor: colors.grey },
            headerTitleStyle:{color:'white', alignSelf:'center'},
            headerRight: (props) => (
                <AntDesign 
                onPress={() => navigation.navigate('NotificationScreen')} 
                style={styles.drawerButton} 
                name="bells" 
                size={30}/>

              ),
            headerLeft: (props) => (
                <AntDesign 
                onPress={() => navigation.navigate('AccountScreen')} 
                style={styles.leftDrawer} 
                name="user"
                size={30}/>

              ),
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
            headerTitleStyle:{color:'white' , alignSelf:'center'},
            headerRight: (props) => (
                <AntDesign 
                onPress={() => navigation.navigate('NotificationScreen')} 
                style={styles.drawerButton} 
                name="bells" 
                size={30}/>

              ),
            headerLeft: (props) => (
                <AntDesign 
                onPress={() => navigation.navigate('AccountScreen')} 
                style={styles.leftDrawer} 
                name="user"
                size={30}/>

              ),
        }}
        >
            <MessageStack.Screen name="Inbox" component={MessageScreen}/>
        </MessageStack.Navigator>
    )
}



const styles = StyleSheet.create({

    drawerButton:{
        marginRight:20,
        color: colors.white,
    },

    leftDrawer:{
        marginLeft:10,
        color: colors.white,
    }

})