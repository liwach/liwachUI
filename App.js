import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigator } from 'navigation/BottomNavigator.js';
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { itemReducer } from "./src/reducers/items";
import { reducer as formReducer } from "redux-form";
import ReduxThunk from "redux-thunk";
import { createStore,combineReducers, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {}
const rootReducer = combineReducers({
  form: formReducer,
  item: itemReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);


export default function App() {
  return (
    <Provider store={store}>
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
