import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigator } from "./src/navigation/";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider>
      <BottomNavigator/>
    <StatusBar style="auto" />
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
