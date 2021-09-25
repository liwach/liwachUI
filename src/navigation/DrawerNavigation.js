/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {
  addItemForm,
  addServiceForm,
  editItemForm,
  ItemOptionsScreen,
} from '../screens/ItemScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen/DetailScreen';
import {ProfileScreen} from '../screens/ProfileScreen/ProfileScreen';
import {MessageScreen} from '../screens/MessageScreen/MessageScreen';
import {colors} from '../utils/colors';
import {DrawerButton} from '../screens/HomeScreen/component/DrawerButton';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {NotificationScreen} from '../screens/NotificationScreen/NotificationScreen';
import {AccountScreen} from '../screens/AccountScreen/AccountScreen';
import {ItemDetailScreen} from '../screens/DetailScreen/ItemDetailScreen';
import {MessageDetailScreen} from '../screens/MessageScreen/MessageDetailScreen';
import {DrawerNavigator} from './DrawerNavigator';
import {DrawerActions} from '@react-navigation/native';
import {EditAccountScreen} from '../screens/AccountScreen/EditAccountScreen';
import {SubscribeScreen} from '../screens/SubscriptionScreen/SubscribeScreen';
import {TypeScreen} from '../screens/SubscriptionScreen/TypeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import {IntroScreen} from '../screens/IntroScreen.js/IntroScreen';
import {SecondIntroScreen} from '../screens/IntroScreen.js/SecondIntroScreen'
import {ThirdIntroScreen} from '../screens/IntroScreen.js/ThirdIntroScreen'
import {SignUpForm} from "../screens/SignUpScreen/SignUpScreen"
import { SignUpChoiceScreen } from '../screens/SignUpScreen/SignUpChoiceScreen';
import { OrganizationForm } from '../screens/SignUpScreen/OrganizationScreen';
import { SignUpSecond } from '../screens/SignUpScreen/SignUpSecond';
import AntDesign from "react-native-vector-icons/AntDesign"
import { LoginForm } from '../screens/AccountScreen/Login';
import AwesomeAlert from 'react-native-awesome-alerts';
import Alert from "react-native"
import { fetchuser } from '../utils/checkFirstTimeActions';
import { RequestScreen } from '../screens/ProfileScreen/RequestScreen';
import { AuthenticationPage } from '../screens/AuthScreen/AuthScreen';
import { IntroductionScreen } from '../screens/IntroScreen.js/Introduction';
import { OrganizationSecond } from '../screens/SignUpScreen/OrganizationSecond';
import { AllItemScreen } from '../screens/ItemScreen/AllItemScreen';
import { AllServiceScreen } from '../screens/ItemScreen/AllServiceScreen';
import { LocationSearchBox } from '../screens/ItemScreen/components/LocationSearchBox';
import { phoneSignin } from '../utils/phoneAuth';
import { deleteItem, flagItem } from '../routes/itemsApi';
import { AlertModal } from '../components/UI/AlertModal';
import { deleteService, flagService } from '../routes/serviceApi';
import { BottomNavigator } from './BottomNavigator';


const ProductStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ItemStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MessageStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const AccountStack = createStackNavigator();
const SubscribeStack = createStackNavigator();
const IntroStack = createStackNavigator();
const SignupStack = createStackNavigator();
const RequestStack = createStackNavigator();
const IntroductionStack = createStackNavigator();

export const IntroductStackScreen = () => {
  return (
    <IntroductionStack.Navigator>
      <IntroductionStack.Screen
       options={({route, navigation}) => ({
        headerShown:false
       })}
       name="IntroductionScreen"
       component={IntroductionScreen}
       
      />
       <AccountStack.Screen
        options={({route, navigation}) => ({
          headerShown: false,
          title: 'Authenticate',
          headerStyle: {backgroundColor: colors.flord_intro},
          headerTitleStyle: {color: colors.flord_secondary, alignSelf: 'center'},
        })}
        name="AuthScreen"
        component={AuthenticationPage}
      />
        <IntroductionStack.Screen
       options={({route, navigation}) => ({
        headerShown:false
       })}
       name="SignUpStack"
       component={SignupStackScreen}
       
      />
        <IntroductionStack.Screen
        options={({route, navigation}) => ({
          headerShown: false,
          title: 'Authenticate',
          headerStyle: {backgroundColor: colors.flord_intro},
          headerTitleStyle: {color: colors.flord_secondary, alignSelf: 'center'},
        })}
        name="HomeStackScreen"
        component={BottomNavigator}
      />
    </IntroductionStack.Navigator>
  )
}


export const RequestScreenStack = () => {

  return(
    <RequestStack.Navigator>
        <RequestStack.Screen
        
        options={({route, navigation}) => ({
          title:"Requests",
          headerShown: true,
          headerMode: 'screen',
          gestureEnabled: true,
          headerStyle: {backgroundColor: colors.water},
          headerTitleStyle: {color: colors.white, alignSelf: 'center'},
        
         })}
         name="RequestScreen"
         component={RequestScreen}
        
        />
      <MessageStack.Screen
        name="ProfileInbox"
        options={({route, navigation}) => ({
          headerShown:true,
          headerStyle: {backgroundColor: colors.water},
          title: route.params.item.requested_item.name,
          headerTitleStyle: { color: colors.white},
          headerRight: () => {},
          headerLeft: () => {
            return (
              <HeaderBackButton
                tintColor={colors.white}
                onPress={() => navigation.goBack()}
              />
            );
          },
        })}
        component={MessageDetailScreen}
      />
      
    </RequestStack.Navigator>
  )


}


export const SignupStackScreen = () => {

    return(
      <SignupStack.Navigator>
          <SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="SignupChoiceScreen"
           component={SignUpChoiceScreen}
          
          />
          <SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="SignupScreen"
           component={SignUpForm}
          
          />
           <SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="OrganizationScreen"
           component={OrganizationForm}
          
          />
             <SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="OrganizationSecond"
           component={OrganizationSecond}
          
          />
    
    <SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="SignUpSecond"
           component={SignUpSecond}
          
          />
      </SignupStack.Navigator>
    )


}

export const IntroStackScreen = () => {
  return (
    <IntroStack.Navigator>
      <IntroStack.Screen
      
        options={({route, navigation}) => ({
         headerShown:false
        })}
        name="IntroScreen"
        component={IntroductionScreen}
      />
        <IntroStack.Screen
      
      options={({route, navigation}) => ({
       headerShown:false
      })}
      name="SecondIntroScreen"
      key="SecondIntroScreen"
      component={SecondIntroScreen}
    />
     <IntroStack.Screen
      
      options={({route, navigation}) => ({
       headerShown:false
      })}
      name="ThirdIntroScreen"
      key="ThirdIntroScreen"
      component={ThirdIntroScreen}
    />
   

    <SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="SignupChoiceScreen"
           component={SignUpChoiceScreen}
          
          />
    <SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="SignupScreen"
           component={SignUpForm}
          
          />

     <SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="OrganizationScreen"
           component={OrganizationForm}
          
          />
     <HomeStack.Screen
        
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerShown: true,
          headerMode: 'screen',
          gestureEnabled: true,
          headerStyle: {backgroundColor: colors.water},
          headerTitleStyle: {color: colors.flord_secondary, alignSelf: 'center'},
          headerRight: props => (
            <Icon
              onPress={() => navigation.navigate('NotificationScreen')}
              style={styles.drawerButton}
              name="md-notifications"
              size={22}
              color={colors.flord_secondary}
            />
          ),
          headerLeft: props => (
            <Icon
              onPress={() => navigation.navigate('AccountScreen')}
              style={styles.leftDrawer}
              name="person"
              size={22}
              color={colors.flord_secondary}
            />
          ),
        })}
      />
    </IntroStack.Navigator>
  );
};

export const SubscribeStackScreen = () => {
  return (
    <SubscribeStack.Navigator>
      <SubscribeStack.Screen
        options={({route, navigation}) => ({
          title: 'Subscribe',
          headerStyle: {backgroundColor: colors.water},
          headerTitleStyle: {
            color: colors.white,
            alignSelf: 'center',
            marginRight: 60,
          },
        })}
        name="SubscribeScreen"
        component={SubscribeScreen}
      />
      <SubscribeStack.Screen
        options={({route, navigation}) => ({
          title: 'Subscribe to Type',
          headerStyle: {backgroundColor: colors.water},
          headerTitleStyle: {color: colors.white},
          headerRight: () => {
           
          },
        })}
        name="TypeScreen"
        component={TypeScreen}
      />
    </SubscribeStack.Navigator>
  );
};

export const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        options={({route, navigation}) => ({
          headerStyle: {backgroundColor: colors.water},
          headerTitleStyle: {color: colors.white, alignSelf: 'center'},
          headerRight: () => {},
          headerLeft: () => {},
        })}
        name="AccountScreen"
        component={AccountScreen}
      />
      <AccountStack.Screen
        options={({route, navigation}) => ({
          title: 'Edit Account',
           headerShown:false,
          headerStyle: {backgroundColor: colors.water},
          headerTitleStyle: {color: 'white'},
          headerRight: () => {
            return (
              <AntDesign
                onPress={() => alert(route.params.user.full_name)}
                style={styles.drawerButton}
                name="delete"
                size={25}
                color={colors.black}
              />
            );
          },
        })}
        name="EditAccountScreen"
        component={EditAccountScreen}
      />
      <AccountStack.Screen
        options={({route, navigation}) => ({
          headerShown: false,
          title: 'Subscribe',
          headerStyle: {backgroundColor: colors.water},
          headerTitleStyle: {color: colors.white, alignSelf: 'center'},
        })}
        name="SubscribeScreen"
        component={SubscribeStackScreen}
      />
       <AccountStack.Screen
        options={({route, navigation}) => ({
          headerShown: false,
          title: 'Authenticate',
          headerStyle: {backgroundColor: colors.flord_intro},
          headerTitleStyle: {color: colors.flord_secondary, alignSelf: 'center'},
        })}
        name="AuthScreen"
        component={AuthenticationPage}
      />
        <AccountStack.Screen
        options={({route, navigation}) => ({
          headerShown: false,
          title: 'Home',
          headerStyle: {backgroundColor: colors.flord_intro},
          headerTitleStyle: {color: colors.flord_secondary, alignSelf: 'center'},
        })}
        name="HomeAuthScreen"
        component={HomeStackScreen}
      />
       <SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="SignupScreen"
           component={SignUpForm}
          
          />

<SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="SignUpSecond"
           component={SignUpSecond}
          
          />
    </AccountStack.Navigator>
  );
};

export const ProductStackScreen = () => {
  return (
    <ProductStack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        headerStyle: {backgroundColor: colors.grey},
        headerTitleStyle: {color: 'white', alignSelf: 'center'},
      }}>
      <ProductStack.Screen name="Choose Item" component={ItemOptionsScreen} />
      <ProductStack.Screen
        options={{
          headerTitleStyle: {
            alignSelf: 'center',
            marginRight: 30,
            color: colors.white,
          },
        }}
        name="Add Product"
        component={addItemForm}
      />
      <ProductStack.Screen name="Add Service" component={addServiceForm} />
      <HomeStack.Screen
        
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerShown: true,
          headerMode: 'screen',
          gestureEnabled: true,
          headerStyle: {backgroundColor: colors.flord_intro},
          headerTitleStyle: {color: colors.flord_secondary, alignSelf: 'center'},
          headerRight: props => (
            <Icon
              onPress={() => navigation.navigate('NotificationScreen')}
              style={styles.drawerButton}
              name="md-notifications"
              size={22}
              color={colors.flord_secondary}
            />
          ),
          headerLeft: props => (
            <Icon
              onPress={() => navigation.navigate('AccountScreen')}
              style={styles.leftDrawer}
              name="person"
              size={22}
              color={colors.flord_secondary}
            />
          ),
        })}
      />
    </ProductStack.Navigator>
  );
};

export const HomeStackScreen = () => {
  const [openEdit,setOpenEdit] = useState(false)
  const [openAlert,setOpenAlert] = useState(false)
  const [showalert,setShowAlert] = useState(false)
  const [alertMsg,setAlertMessage] = useState({msg:"",title:"",color:'',navTitle:''})
  return (
    <HomeStack.Navigator
      screenOptions={({route,navigation}) => ({
        headerShown: true,
        headerMode: 'screen',
        gestureEnabled: true,
        headerStyle: {backgroundColor: colors.water},
          headerTitleStyle: {color: colors.white, alignSelf: 'center'},
        headerRight: props => (
          <Icon
            onPress={() => navigation.navigate('NotificationScreen')}
            style={styles.drawerButton}
            name="notifications-outline"
            size={30}
            
          />
        ),
        headerLeft: () => {
          console.log("Icon", )
          return(<Icon
            onPress={() => navigation.navigate('AccountScreen')}
            style={styles.leftDrawer}
            name="person-outline"
            size={30}
          />)
        },
      })}>
   
      <HomeStack.Screen
        options={{headerShown:true,
        headerStyle:{
          elevation:0,
          backgroundColor:colors.water
        },
        headerTitleStyle:{
          color: colors.white,
          alignSelf:'center'
        }
      }}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen name="Detail Screen" component={DetailScreen} />
      <HomeStack.Screen 
      name="Profile" 
      component={ProfileStackScreen}
      options={({route, navigation}) => ({
      headerShown:false,
      })}
      />

      <HomeStack.Screen
        name="Single Item"
        options={({route, navigation}) => ({
          title: route.params.item.name,
          headerTitleStyle:{textAlign:"center", marginRight:60,color:colors.flord_secondary},
          headerRight: () => {},
          headerLeft: () => {
            return (
              <HeaderBackButton
                tintColor={colors.flord_secondary}
                onPress={() => navigation.goBack()}
              />
            );
          },
        })}
        component={ItemDetailScreen}
      />
      <HomeStack.Screen name="Edit Item" component={editItemForm} />
      <AccountStack.Screen
        options={({route, navigation}) => ({
          headerShown:false,
          headerStyle: {backgroundColor: colors.water},
          headerTitleStyle: {color: colors.flord_intro, alignSelf: 'center'},
          headerRight: () => {},
          headerLeft: () => {},
        })}
        name="AccountScreen"
        component={AccountStackScreen}
      />
       <AccountStack.Screen
        options={({route, navigation}) => ({
          title: 'Edit Account',
          headerStyle: {backgroundColor: colors.flord_intro2},
          headerTitleStyle: {color: colors.flord_intro},
          headerLeft: () => {
            return (
              <HeaderBackButton
                tintColor={colors.white}
                onPress={() => navigation.goBack()}
              />
            );
          },
          headerRight: () => {
            return (
              <AntDesign
                onPress={() => alert(route.params.user.full_name)}
                style={styles.drawerButton}
                name="delete"
                size={25}
                color={colors.black}
              />
            );
          },
        })}
        name="EditAccountScreen"
        component={EditAccountScreen}
      />
       <SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="SignupScreen"
           component={SignUpForm}
          
          />
          
<SignupStack.Screen
          
          options={({route, navigation}) => ({
            headerShown:false
           })}
           name="SignUpSecond"
           component={SignUpSecond}
          
          />
       <AccountStack.Screen
        options={({route, navigation}) => ({
          title: 'Login',
          headerShown:false,
          headerStyle: {backgroundColor: colors.flord_intro2},
          headerTitleStyle: {color: colors.flord_intro},
          headerLeft: () => {
            return (
              <HeaderBackButton
                tintColor={colors.white}
                onPress={() => navigation.goBack()}
              />
            );
          },
          headerRight: () => {
            return (
              <AntDesign
                onPress={() => alert(route.params.user.full_name)}
                style={styles.drawerButton}
                name="delete"
                size={25}
                color={colors.black}
              />
            );
          },
        })}
        name="AuthenticationScreen"
        component={AuthenticationPage}
      />
      <HomeStack.Screen
        name="NotificationScreen"
        options={({route, navigation}) => ({
          title: 'Notification',
          headerTitleStyle: {color: colors.white, alignSelf: 'center',marginRight:50},
          headerRight: () => {},
          headerLeft: () => {
            return (
              <HeaderBackButton
                tintColor={colors.white}
                onPress={() => navigation.goBack()}
              />
            );
          },
        })}
        component={NotificationScreen}
      />
                <HomeStack.Screen
       options={({route, navigation}) => ({
        title:"",
        headerShown:true,
        headerStyle:{
          elevation:0,
          backgroundColor:colors.water
        },
        headerTitleStyle:{
          color: colors.white
        },
       
        headerRight: () => {
          return(
            <View style={{alignItems:'center',width:"100%",justifyContent:'center',zIndex:100}}>
            <LocationSearchBox/>
            </View>
          )
        },
        headerLeft: () => {
          return (
            <HeaderBackButton
              tintColor={colors.white}
              onPress={() => navigation.goBack()}
            />
          );
        },
      })}
        name="AllItemScreen"
        component={AllItemScreen}
      />
      <ProfileStack.Screen
      
      name="PostDetail"
      options={({route, navigation}) => ({
        title: route.params.item.name,
        headerTitleStyle:{color:colors.white,textAlign:"center"},
        headerRight: () => {
         console.log("from profile nav",route.params.edit)
          if(route.params.edit==true)
               return(
                 
            <View style={{flexDirection:'row'}}>
              {openEdit!=true?
                <AntDesign
              onPress={
                async()=>
                {
                 if(route.params.item.post_type=="item"){
                  const resp = await deleteItem(route.params.item.id).then((data)=>{
                    console.log("in resp",data)
                    return data
                  })
                  if(resp){
                   setShowAlert(true)
                   setAlertMessage({
                     title:"Item Deleted",
                     msg:`${route.params.item.name} is deleted`,
                     color:colors.green,
                     navTitle:"Profile"
                   })
                  }
                  else{
                   setShowAlert(true)
                   setAlertMessage({
                     title:"Item is not deleted",
                     msg:`${route.params.item.name} is deleted`,
                     color:colors.straw,
                     navTitle:""
                   })
                
                  }
                 }
                 
                 if(route.params.item.post_type=="service"){
                  const resp = await deleteService(route.params.item.id).then((data)=>{
                    console.log("in resp",data)
                    return data
                  })
                  if(resp){
                   setShowAlert(true)
                   setAlertMessage({
                     title:"Item Deleted",
                     msg:`${route.params.item.name} is deleted`,
                     color:colors.green,
                     navTitle:"Profile"
                   })
                  }
                  else{
                   setShowAlert(true)
                   setAlertMessage({
                     title:"Item is not deleted",
                     msg:`${route.params.item.name} is deleted`,
                     color:colors.straw,
                     navTitle:""
                   })
                
                  }
                 }
                 }
              }
              style={{marginRight:10}}
              color={colors.white}
              name="delete"
              size={25}
            />
           
            
            :<View>
              
              </View>}
          {openEdit!=true?
             <Entypo
             onPress={() => setOpenEdit(true)}
             style={styles.drawerButton}
             color={colors.white}
             name="edit"
             size={25}
              
           />:
           <Entypo
           onPress={() => setOpenEdit(false)}
           style={styles.drawerButton}
           color={colors.white}
           name="cross"
           size={30}
            
         />
          }
          <AlertModal show={showalert} setShowAlert={setShowAlert} message={alertMsg} navigation={navigation}/>
         </View>
          
          
       )

       if(route.params.edit==false){
          return(
            <View style={{backgroundColor:colors.water,height:25}}>
            <TouchableOpacity onPress={
              async()=>
              {
               if(route.params.item.post_type=="item"){
                const resp = await flagItem(route.params.item.id).then((data)=>{
                  console.log("in resp",data)
                  return data
                })
                if(resp){
                 setShowAlert(true)
                 setAlertMessage({
                   title:"Item Flagged",
                   msg:`${route.params.item.name} is flagged`,
                   color:colors.green,
                   navTitle:""
                 })
                }
                else{
                 setShowAlert(true)
                 setAlertMessage({
                   title:"Item is not Flagged",
                   msg:`${route.params.item.name} is Flagged`,
                   color:colors.straw,
                   navTitle:""
                 })
              
                }
               }
               
               if(route.params.item.post_type=="service"){
                const resp = await flagService(route.params.item.id).then((data)=>{
                  console.log("in resp",data)
                  return data
                })
                if(resp){
                 setShowAlert(true)
                 setAlertMessage({
                   title:"Item Deleted",
                   msg:`${route.params.item.name} is deleted`,
                   color:colors.green,
                   navTitle:""
                 })
                }
                else{
                 setShowAlert(true)
                 setAlertMessage({
                   title:"Item is not deleted",
                   msg:`${route.params.item.name} is deleted`,
                   color:colors.straw,
                   navTitle:""
                 })
              
                }
               }
               }
            }
            >
            <Ionicons name={"flag-outline"} size={25} color={colors.white} style={styles.drawerButton}/>
            </TouchableOpacity>
              <AlertModal show={showalert} setShowAlert={setShowAlert} message={alertMsg} navigation={navigation}/>
              </View>
          )
       }
          
            },
        headerLeft: () => {
          return (
            <View>
              {openEdit!=true?
                 <HeaderBackButton
                 tintColor={colors.white}
                 onPress={() => navigation.goBack()}
               />:<View></View>
              }
           
            </View>
          );
        },
      })}
      
      component={openEdit==false?ItemDetailScreen:editItemForm}
    />
       <HomeStack.Screen
       options={({route, navigation}) => ({
         title:"Services",
        headerShown:true,
        headerStyle:{
          elevation:0,
          backgroundColor:colors.water
        },
        headerTitleStyle:{
          color: colors.white,
          
        },
        headerRight: () => {
          return(
            <View style={{alignItems:'center',width:"100%",justifyContent:'center',zIndex:100}}>
            <LocationSearchBox/>
            </View>
          )
        },
        headerLeft: () => {
          return (
            <HeaderBackButton
              tintColor={colors.white}
              onPress={() => navigation.goBack()}
            />
          );
        },
      })}
        name="AllServiceScreen"
        component={AllServiceScreen}
      />
       <SubscribeStack.Screen
        options={({route, navigation}) => ({
          title: 'Subscribe',
          headerStyle: {backgroundColor: colors.flord_intro2},
          headerTitleStyle: {
            color: colors.white,
            alignSelf: 'center',
            marginRight: 10,
          },
        })}
        name="SubscribeScreen"
        component={SubscribeScreen}
      />
      <SubscribeStack.Screen
        options={({route, navigation}) => ({
          title: `Subscribe to ${route.params.category.name}`,
          headerStyle: {backgroundColor: colors.flord_intro2},
          headerTitleStyle: {color: colors.white},
         
        })}
        name="TypeScreen"
        component={TypeScreen}
      />
  
        <ProductStack.Screen
        
        options={({route, navigation}) => ({
          headerTitleStyle: {
            alignSelf: 'center',
            marginRight: 30,
            color: colors.white,
          },
          headerRight: () => {

          },
          headerLeft: () => {
            return (
              <HeaderBackButton
                tintColor={colors.white}
                onPress={() => navigation.goBack()}
              />
            );
          },
        })}
        name="Add Product"
        component={addItemForm}
      />
       <ProductStack.Screen 
        options={({route, navigation}) => ({
          headerTitleStyle: {
            alignSelf: 'center',
            marginRight: 30,
            color: colors.white,
          },
          headerRight: () => {

          },
          headerLeft: () => {
            return (
              <HeaderBackButton
                tintColor={colors.white}
                onPress={() => navigation.goBack()}
              />
            );
          },
        })}
       name="Add Service" component={addServiceForm} />
    </HomeStack.Navigator>
  );
};

export const ProfileStackScreen = () => {
  const [openEdit,setOpenEdit] = useState(false)
  const [openAlert,setOpenAlert] = useState(false)
  const [showalert,setShowAlert] = useState(false)
  const [alertMsg,setAlertMessage] = useState({msg:"",title:"",color:'',navTitle:''})

  const showAlert = () =>
  alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

  const deletePosts = async() => {

  }

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        headerStyle: {backgroundColor: colors.water,elevation:0},
        headerTitleStyle: {color: colors.white, alignSelf: 'center'},

        headerRight: props => (
          <AntDesign
            onPress={() => navigation.navigate('NotificationScreen')}
            style={styles.drawerButton}
            name="bells"
            size={30}
          />
        ),
        headerLeft: props => (
          <AntDesign
            onPress={() => navigation.navigate('AccountScreen')}
            style={styles.leftDrawer}
            name="user"
            size={30}
          />
        ),
      }}>

      <ProfileStack.Screen
        name="Profile"
        options={({route, navigation}) => ({
          title: 'Posts',
          headerRight: () => {},
          headerLeft: () => {},
        })}
        component={ProfileScreen}
      />
      <ProfileStack.Screen
      
        name="PostDetail"
        options={({route, navigation}) => ({
          title: route.params.item.name,
          headerTitleStyle:{color:colors.white,textAlign:"center"},
          headerRight: () => {
           console.log("from profile nav",route.params.edit)
            if(route.params.edit==true)
                 return(
                   
              <View style={{flexDirection:'row'}}>
                {openEdit!=true?
                  <AntDesign
                onPress={
                  async()=>
                  {
                   if(route.params.item.post_type=="item"){
                    const resp = await deleteItem(route.params.item.id).then((data)=>{
                      console.log("in resp",data)
                      return data
                    })
                    if(resp){
                     setShowAlert(true)
                     setAlertMessage({
                       title:"Item Deleted",
                       msg:`${route.params.item.name} is deleted`,
                       color:colors.green,
                       navTitle:"Profile"
                     })
                    }
                    else{
                     setShowAlert(true)
                     setAlertMessage({
                       title:"Item is not deleted",
                       msg:`${route.params.item.name} is deleted`,
                       color:colors.straw,
                       navTitle:""
                     })
                  
                    }
                   }
                   
                   if(route.params.item.post_type=="service"){
                    const resp = await deleteService(route.params.item.id).then((data)=>{
                      console.log("in resp",data)
                      return data
                    })
                    if(resp){
                     setShowAlert(true)
                     setAlertMessage({
                       title:"Item Deleted",
                       msg:`${route.params.item.name} is deleted`,
                       color:colors.green,
                       navTitle:"Profile"
                     })
                    }
                    else{
                     setShowAlert(true)
                     setAlertMessage({
                       title:"Item is not deleted",
                       msg:`${route.params.item.name} is deleted`,
                       color:colors.straw,
                       navTitle:""
                     })
                  
                    }
                   }
                   }
                }
                style={{marginRight:10}}
                color={colors.white}
                name="delete"
                size={25}
              />
             
              
              :<View></View>}
            {openEdit!=true?
               <Entypo
               onPress={() => setOpenEdit(true)}
               style={styles.drawerButton}
               color={colors.white}
               name="edit"
               size={25}
                
             />:
             <Entypo
             onPress={() => setOpenEdit(false)}
             style={styles.drawerButton}
             color={colors.white}
             name="cross"
             size={30}
              
           />
            }
            <AlertModal show={showalert} setShowAlert={setShowAlert} message={alertMsg} navigation={navigation}/>
           </View>
            
            
         )
              },
          headerLeft: () => {
            return (
              <View>
                {openEdit!=true?
                   <HeaderBackButton
                   tintColor={colors.white}
                   onPress={() => navigation.goBack()}
                 />:<View></View>
                }
             
              </View>
            );
          },
        })}
        
        component={openEdit==false?ItemDetailScreen:editItemForm}
      />

      
      <MessageStack.Screen
        name="ProfileInbox"
        options={({route, navigation}) => ({
          title: route.params.item.requester_item_id,
          headerTitleStyle: { color: colors.white},
          headerRight: () => {},
          headerLeft: () => {
            console.log(route.params.item)
            return (
              <HeaderBackButton
                tintColor={colors.white}
                onPress={() => navigation.goBack()}
              />
            );
          },
        })}
        component={MessageDetailScreen}
      />
    </ProfileStack.Navigator>
  );
};

export const MessageStackScreen = ({route,navigation }) => {
 
  return (
    <MessageStack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        headerStyle: {backgroundColor: colors.flord_intro2},
        headerTitleStyle: {color: colors.flord_intro, alignSelf: 'center'},
        
      }}>
      {/* <MessageStack.Screen
        name="Inbox"
        options={({route, navigation}) => ({
          title: 'Inbox',
          headerRight: () => {},
        })}
        component={MessageScreen}
      /> */}
      <MessageStack.Screen
        name="SingleMessage"
        options={({route, navigation}) => ({
          
          title: 'Inbox',
          headerTitleStyle: {alignSelf: 'center', color: colors.white},
          headerRight: () => {},
          headerLeft: () => {
            return (
              <HeaderBackButton
                tintColor={colors.white}
                onPress={() => navigation.goBack()}
              />
            );
          },
        })}
        component={MessageDetailScreen}
      />
    </MessageStack.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerButton: {
    marginRight: 20,
    color: colors.white,
  },

  leftDrawer: {
    marginLeft: 10,
    color: colors.white,
  },
});
