import React from "react"
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'
// import { TextInput } from "react-native-paper"
import { colors } from "../../../utils/colors"

const removeSpaces = (term) => term.replace(detectSpacesRegex, '')

const allowOnlyChar = (term) => term.replace(onlyCharRegex, "")



 const detectSpacesRegex = /\s/g

const onlyCharRegex = /[^a-zA-Z ]/g

export const CustomTextInput = (
        props
    ) => {

    const textChangeHandler = (term) => {
        // password email and mobile number should not contain white spaces
        // name field should not contain any specialcharacter or number 
        const value = props.allowOnlyChar ? allowOnlyChar(term) : removeSpaces(term)
        props.input.onChange(value)
    }
       
    return(
        <View>
            <TextInput
            {...props}
            ref={props.refField}
            placeholderTextColor={colors.grey}
            // below props are needed for the textInput to be handled properly by redux form
            value={props.input.value}
            onChangeText={textChangeHandler}
            onFocus={props.input.onFocus}
            onBlur={props.input.onBlur}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({

    textInput:{
        width: '90%',
        margin: 10,
        alignSelf: 'center',
        borderRadius:30
    }

})