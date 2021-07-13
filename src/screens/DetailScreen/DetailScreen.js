import React from 'react'
import {View, Text} from "react-native"
import { Button } from 'react-native-paper'

export const DetailScreen = ({route,navigation}) => {
    const { itemId, otherParam } = route.params;
    return(
        <View>
            <Text style={{color:"black"}}>
            {JSON.stringify(itemId)}
            </Text>
            <Button  onPress={()=>{props.navigation.navigate("Edit Item")}}>{otherParam}</Button>
        </View>
    );
};