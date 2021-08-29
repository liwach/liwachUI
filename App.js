import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
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
import { IntroStackScreen } from './src/navigation/DrawerNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {

  const [value, setValue] = useState(null);
  useEffect(() => {
    const isFirstTime = async () => {
      const firstOpen = await AsyncStorage.getItem('isFirst');
      setValue(firstOpen)
    };
    isFirstTime();
    console.log("value",value)
  }, []);

  return (
    <Provider store={store}>
     
      <NavigationContainer>
      {/* {(FirstOpen) && <BottomNavigator />}
      {!FirstOpen && <IntroStackScreen sour/>} */}
      {/* <BottomNavigator/> */}
      {/* {value !== null? <BottomNavigator />: <IntroStackScreen />} */}
      {value !== null &&  <BottomNavigator />}
      {value === null && <IntroStackScreen />}
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
});
