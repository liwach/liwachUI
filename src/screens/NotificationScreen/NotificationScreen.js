import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../utils/colors';
import {NotificationItem} from './components/NotificationItem'
import { NotificationList } from './components/NotificationList';


data = [
    {
        id:1,
        tag:"view products",
        message:"There are 17 new products in the electronics category!",
        time:"May 11"
    },
    {
        id:2,
        tag:"view products",
        message:"There are 17 new products in the electronics category!",
        time:"May 11"
    },
    {
        id:3,
        tag:"view products",
        message:"There are 17 new products in the electronics category!",
        time:"May 11"
    },


]
export const NotificationScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <NotificationList navigation={navigation} data={data}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.background,
        height: "100%"

    }
})