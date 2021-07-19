import { AntDesign } from "@expo/vector-icons"
import React from "react"
import {
View,
Text,
StyleSheet
} from "react-native"
import { colors } from "../../../utils/colors"

export const AccountMenuItem = ({iconName,Title,navigation,onPress}) => {

    return(
        <View style={styles.container}>
            <View style={[styles.icon,styles.textWithIcon,styles.container]}>
                <AntDesign color={colors.grey} size={20} name={iconName} />
                <Text style={styles.text}>{Title}</Text>
            </View>
           
            <View  style={styles.icon}>
                <AntDesign size={20} color={colors.grey} name='right' onPress={onPress} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"row",
       
    
    },

    textWithIcon:{
        flex:1,
        justifyContent:"flex-start"
    },

    icon:{
        width:20,
        margin:20,
        color:colors.grey
    },
    text:{
        fontSize:18,
        marginLeft: 30,
        fontWeight:'bold'
       
    },

})