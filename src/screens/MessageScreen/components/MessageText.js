import React from "react"
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'
import { colors } from "../../../utils/colors"

export const TextBox = ({item, type}) => {
        const backgroundColor = type === "send" ? colors.white : colors.primary;
        const color = type === "send" ? colors.primary : colors.white;
        return(
            <View style={[styles.container,{backgroundColor:backgroundColor}]}>
                <Text style={[styles.message,{color:color}]}>{item.message}</Text>
                <Text style={[styles.time,{color:color}]}>{item.time}</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:0.5,
      
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius:10,
        borderColor:colors.lighter_blue,
        padding: 10,
        margin:10
    },

    message:{
        textAlign:'left',
        
    },
    time:{
        textAlign:'right',
        fontSize:10
       
    }

})