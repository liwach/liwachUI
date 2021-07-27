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
import { MessageDetailScreen } from "../screens/MessageScreen/MessageDetailScreen";
import { DrawerNavigator } from "./DrawerNavigator";
import { DrawerActions } from '@react-navigation/native';
import { EditAccountScreen } from "../screens/AccountScreen/EditAccountScreen";
import { SubscribeScreen } from "../screens/SubscriptionScreen/SubscribeScreen";
import { TypeScreen } from "../screens/SubscriptionScreen/TypeScreen";


const ProductStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ItemStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MessageStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const AccountStack = createStackNavigator();
const SubscribeStack = createStackNavigator();

export const SubscribeStackScreen = () => {

    return(
        <SubscribeStack.Navigator
        
        >
    <SubscribeStack.Screen
     options={({ route, navigation }) => ({
       
        title: "Subscribe",
        headerStyle: { backgroundColor: colors.grey },
        headerTitleStyle:{color:'white' , alignSelf:'center', marginRight:10},
        
         })} 
    name="SubscribeScreen" component={SubscribeScreen}/>
    <SubscribeStack.Screen 
     options={({ route, navigation }) => ({
        
        title: "Subscribe to Type",
        headerStyle: { backgroundColor: colors.grey },
        headerTitleStyle:{color:'white'},
        headerRight: () =>{
            return(
                <AntDesign 
                onPress={() => alert(route.params.item.name)} 
                style={styles.drawerButton}
                name='checkcircleo' 
                size={25}
                color={colors.black}
                />
            )
           
        },
         })} 
    name="TypeScreen" component={TypeScreen}/>
    
        </SubscribeStack.Navigator>
    )

}


export const AccountStackScreen = () => {

    return(
        <AccountStack.Navigator
        
        >
    <AccountStack.Screen
     options={({ route, navigation }) => ({
       
        title: "Account Settings",
        headerStyle: { backgroundColor: colors.grey },
        headerTitleStyle:{color:'white' , alignSelf:'center'},
        headerRight: () =>{

        },
        headerLeft: () =>{
           
           
        }
         })} 
    name="AccountScreen" component={AccountScreen}/>
    <AccountStack.Screen 
     options={({ route, navigation }) => ({
        
        title: "Edit Account",
        headerStyle: { backgroundColor: colors.grey },
        headerTitleStyle:{color:'white'},
        headerRight: () =>{
            return(
                <AntDesign 
                onPress={() => alert(route.params.user.full_name)} 
                style={styles.drawerButton}
                name='delete' 
                size={25}
                color={colors.black}
                />
            )
           
        },
         })} 
    name="EditAccountScreen" component={EditAccountScreen}/>
    <AccountStack.Screen 
     options={({ route, navigation }) => ({
        headerShown:false,
        title: "Subscribe",
        headerStyle: { backgroundColor: colors.grey },
        headerTitleStyle:{color:'white' , alignSelf:'center'},

        
      })} 
    name="SubscribeScreen" component={SubscribeStackScreen}/>
    
        </AccountStack.Navigator>
    )
}


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
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle:{color:'white', alignSelf:'center', marginRight:50 },
                headerRight: (props) => (
                    <AntDesign 
                    onPress={() => navigation.navigate('NotificationScreen')} 
                    style={styles.drawerButton} 
                    name="bells" 
                    size={22}/>

                  ),
                headerLeft: (props) => (
                    <AntDesign 
                    onPress={() => navigation.navigate('AccountScreen')} 
                    style={styles.leftDrawer} 
                    name='user'
                    size={22}/>

                  ),
            })}
        >
            <HomeStack.Screen options={{ title: 'Home' }} name="Home" component={HomeScreen}/>
            <HomeStack.Screen  name="Detail Screen" component={DetailScreen}/>
            <HomeStack.Screen  name="Single Item"  
             options={({ route, navigation }) => ({
                title: route.params.item.name,
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
            <HomeStack.Screen 
             options={({ route, navigation }) => ({
       
                headerShown:false,
                headerRight:{
                    
                }
                
                 })} 
            name="AccountScreen" component={AccountStackScreen}/>

            <HomeStack.Screen  name="NotificationScreen" 
            options={( { route, navigation })=>({
                title:"Notification",
                headerRight: () =>{

                },
                headerLeft: () =>{
                    return( <HeaderBackButton 
                        tintColor={colors.white}
                        onPress={()=>navigation.goBack()} 
                        
                        />)
                   
                }
                 
                })} component={NotificationScreen}/>
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
            <ProfileStack.Screen 
            name="Profile" 
            options={({ route, navigation }) => ({
                title: "Profile",
                headerRight: () =>{

                },
                headerLeft: () =>{
                   
                   
                }
                 })} 
            component={ProfileScreen}/>
            <HomeStack.Screen  name="Post Detail Screen"
             options={({ route, navigation }) => ({
                title: route.params.item.title,
                headerRight: () =>{

                },
                headerLeft: () =>{
                    return( <HeaderBackButton 
                        tintColor={colors.white}
                        onPress={()=>navigation.goBack()} 
                        
                        />)
                   
                }
                 })} 
             component={ItemDetailScreen}/>
        </ProfileStack.Navigator>
    )
}

export const MessageStackScreen = () => {
    return(
        <MessageStack.Navigator
        screenOptions={{
            headerShown:true,
            gestureEnabled:true,
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle:{color:'white' , alignSelf:'center'},
           
        }}
        >
            <MessageStack.Screen name="Inbox"
                 options={({ route, navigation }) => ({
                    title: 'Inbox',
                    headerRight: () =>{
    
                    },
                   
                     })} 
             component={MessageScreen}/>
             <MessageStack.Screen name="SingleMessage"
              options={({ route, navigation }) => ({
                title: route.params.item.other_user,
                headerTitleStyle:{alignSelf:'center',marginRight:30,color:colors.white},
                headerRight: () =>{

                },
                headerLeft: () =>{
                    return( <HeaderBackButton 
                        tintColor={colors.white}
                        onPress={()=>navigation.goBack()} 
                        
                        />)
                   
                }
                 })} 
                 component={MessageDetailScreen}
             />
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