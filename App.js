import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View,Image  } from 'react-native';
import { BottomNavigator } from 'navigation/BottomNavigator.js';
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
//import { itemsReducer } from './src/reducers/items/itemReducer';
import { reducer as formReducer } from "redux-form";
import ReduxThunk from "redux-thunk";
import { createStore,combineReducers, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  ADD_ITEM,
  FETCH_ITEMS,
  ITEM_LOADING,
  ITEM_FAILURE,
} from "./src/reducers/items/itemActions";
import store  from './src/utils/store';
import { IntroductStackScreen, IntroStackScreen } from './src/navigation/DrawerNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors } from './src/utils/colors';
import { IntroductionScreen } from './src/screens/IntroScreen.js/Introduction';
import { IntroScreen } from './src/screens/IntroScreen.js/IntroScreen';
import messaging from '@react-native-firebase/messaging';
export default function App() {

  const [value, setValue] = useState(false);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
  
    <Provider store={store}>
     
      <NavigationContainer>
        {!value? <BottomNavigator/>:<IntroductStackScreen/>}
      <StatusBar style="auto" />
    </NavigationContainer>
    </Provider>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide:{
    width:'100%',
    height:'100%',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#0a2239"
  },
  image:{
    width:300,
    height:300
  },
  title:{
    color:colors.white,
    fontSize:50,
    textAlign:'center'
  },
  text:{
     color:colors.white,
     fontSize:20,
     textAlign:'center'

  }
});
