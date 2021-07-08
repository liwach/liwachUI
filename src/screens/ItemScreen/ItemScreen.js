import React from "react"
import {View, Text} from "react-native"
import { Button } from "react-native-paper"

export const ItemOptionsScreen = (props) => {

    return(
        <View>
            <Button onPress={()=>{props.navigation.navigate("Add Product")}}>Add Product</Button>
            <Button onPress={()=>{props.navigation.navigate("Add Service")}}>Add Services</Button>
        </View>
    )
}