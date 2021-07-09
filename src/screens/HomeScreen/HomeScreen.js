import React from 'react'
import {View, Text} from 'react-native'
import { Button } from 'react-native-paper'

export const HomeScreen = (props) => {

    return(
        <View>
           
            <Button onPress={()=>{props.navigation.navigate("Detail Screen")}}>View Item</Button>
        </View>
    )
}