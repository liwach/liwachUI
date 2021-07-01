import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigator } from 'navigation/BottomNavigator.js';
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
       <BottomNavigator/>
    <StatusBar style="auto" />
    
    </NavigationContainer>
     
    
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
