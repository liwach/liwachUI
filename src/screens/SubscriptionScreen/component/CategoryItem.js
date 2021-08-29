import React from "react"
import { StyleSheet, TouchableOpacity,Text } from "react-native"
import { colors } from "../../../utils/colors"

export const CategoryItem = ({item,onPress}) => {

    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.textContainer}>{item.name}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    container:{
        backgroundColor:colors.flord_intro2,
        margin:20,
        width: "70%",
        padding:20,
        color:colors.white,
        textAlign:'center',
        alignItems:'center',
        borderRadius:30,
        alignSelf:'center'
    },
    textContainer:{
        textAlign:'center',
        alignSelf:'center',
        color:colors.white,
        fontSize:18
    }


})