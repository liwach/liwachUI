import React from "react"
import {
    View,
    Text
} from "react-native"
import { TextBox } from "./components/MessageText"

export const MessageDetailScreen = ({route,navigation}) => {
    const { item} = route.params;
    return(
        <View>
            <TextBox item={item} type="send"/>
            <TextBox item={item} type="recieve"/>
        </View>
    )

}
