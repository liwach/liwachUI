import React from "react"
import {View, Text} from 'react-native'

export const TypeScreen = ({navigation, route}) => {
    const {category} = route.params
    return(
        <View>
            <Text>{category}</Text>
        </View>
    )
}