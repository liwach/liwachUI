import { AntDesign } from "@expo/vector-icons"
import React from "react"
import {View, Text, StyleSheet} from "react-native"
import { colors } from "../../../utils/colors"




export const SwapButton = () => {

    const onPressHandler = () => {
        alert("swap")
    }
    return(
        <View style={styles.container}>
            <Text onPress={onPressHandler} style={styles.textContainer} >Swap</Text>
            <AntDesign style={styles.iconContainer}  name={'swap'} size={20}/>
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        backgroundColor: colors.black,
        paddingLeft:7,
        paddingRight:7,
        borderRadius: 10,
        
    },

    textContainer:{
        color:colors.white,
        marginRight:5,
    },
    iconContainer:{
        color:colors.white
    }


})