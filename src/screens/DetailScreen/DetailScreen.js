import React from 'react'
import {View, Text} from "react-native"
import { Button } from 'react-native-paper'

export const DetailScreen = ({route,navigation}) => {
    const { item } = route.params;
    return(
        <View>
            <Text style={{color:"black"}}>
            {JSON.stringify(item)}
            </Text>
            
        </View>
    );
};