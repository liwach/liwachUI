import React from 'react'
import {View, Text} from "react-native"
import { Button } from 'react-native-paper'

export const DetailScreen = (props) => {
    return(
        <View>
            <Text>
                This is Detail Screen.
            </Text>
            <Button onPress={()=>{props.navigation.navigate("Edit Item")}}>Edit</Button>
        </View>
    );
};