import React from "react"
import { StyleSheet, TouchableOpacity,View,Text } from "react-native"
import { colors } from "../../utils/colors"

export const OutlinedButton = ({text}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.textContainer}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    container:{
        borderWidth:1,
        borderRadius:20,
        borderColor: colors.flord_intro2,
        minWidth: 80,
        padding:2,
        width: '20%',
        marginLeft:20,
        marginBottom:20,
        backgroundColor: colors.flord_intro2
    },
    textContainer:{
        color: colors.white,
        textAlign:'center',
        
    }


})