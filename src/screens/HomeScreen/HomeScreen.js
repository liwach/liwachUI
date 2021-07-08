import React from 'react'
import {View, Text} from 'react-native'
import { Button } from 'react-native-paper'

export const HomeScreen = (props) => {

    return(
        <View>
            <Text>Hello this is home screen</Text>
            <Button onPress={()=>{props.navigation.navigate("Detail Screen")}}>View</Button>
        </View>
    )
}