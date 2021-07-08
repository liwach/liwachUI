import React from "react"
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { TextInput } from "react-native-paper"


export const CustomTextInput = (
    {
        placeholder
    }) => {
    return(
        <View>
            <TextInput
            mode='outlined'
            placeholder={placeholder}
            style={styles.textInput}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({

    textInput:{
        width: '90%',
        margin: 10,
        alignSelf: 'center',
    }

})