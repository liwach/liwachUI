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
      
        borderRadius:20,
        minWidth: 80,
        padding:4,
        width: '40%',
        
        marginLeft:20,
        marginBottom:20,
        backgroundColor: colors.water
    },
    textContainer:{
        color: colors.white,
        textAlign:'center',
        
    }


})