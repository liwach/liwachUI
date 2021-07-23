import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
//import { store } from './src/utils/store';


const initialState = {
  items: [],
 
};

 const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {...state, items: action.payload};
    default:
      return state;
  }
}


// const rootReducer = () => combineReducers({
//   itemsReducer,
  
// }); 

//const store = createStore();


export default function App() {
  return (
    <Provider >
      <NavigationContainer>
      <BottomNavigator/>
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
