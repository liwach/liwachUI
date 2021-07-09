import React from "react"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
}
from "react-native"
import { colors } from "../../../utils/colors"


export const PostButton = ({name}) => {

    return(
        <TouchableOpacity style={styles.nextButton}>
           <Text style={styles.TextContainer}>{name}</Text> 
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    nextButton:{
        width: 150,
        height:40,
        backgroundColor:'transparent',
        borderWidth:1,
        borderColor:colors.grey,
        textAlign:'center',
        borderRadius:10,
        justifyContent:'center',
    },
    TextContainer:{
        textAlign:'center',
        fontSize:20,
    }
})