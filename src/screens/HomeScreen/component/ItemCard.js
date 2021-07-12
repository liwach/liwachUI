import React from 'react'
import {View,Text,StyleSheet,StatusBar} from 'react-native'

export const ItemCard = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 20,
      backgroundColor: "transparent"
    },
    title: {
      fontSize: 18
    }
  });
  