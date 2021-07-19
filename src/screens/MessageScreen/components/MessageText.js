import React from "react"
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'
import { colors } from "../../../utils/colors"

export const TextBox = ({item, messageType}) => {

        return(
            <View style={styles.container}>
                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        backgroundColor:colors.black,
        color: colors.white,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius:10,
        padding: 10,
        margin:10
    },

    message:{
        textAlign:'left',
        color: colors.white,
    },
    time:{
        textAlign:'right',
        color: colors.white,
    }

})