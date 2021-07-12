import React from "react"
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { TextInput } from "react-native-paper"


export const CustomTextInput = (
    {
        placeholder,
        icon,
        multiline,
        editable,
        input
    }) => {
    return(
        <View>
            <TextInput
            mode='outlined'
            placeholder={placeholder}
            style={styles.textInput}
            multiline={multiline}
            editable={editable}
            blurOnSubmit={true}
            {...input}
            keyboardType="default"
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