import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { StyleSheet,Button } from "react-native"
import { colors } from "../../../utils/colors"
import { exchangeItem } from "../../../routes/exchangeApi"
import Icon  from "react-native-vector-icons/Ionicons";

export const ExchangeButton = ({item}) => {
    console.log(item)

    return(
        <Icon name="swap-horizontal" size={25} color={colors.primary} onPress={()=>{exchangeItem(item.id,item.status)}}/>
    )

}

export const ChatButton = ({item,navigation}) => {
    console.log(item)

    return (
        <Icon name="chatbubble-ellipses" size={25} color={colors.primary} onPress={() => 
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ProfileInbox', {
              item:item
            })}/>
    )

}




const styles = StyleSheet.create({

    buttonBox : {

        margin: 10

    }


})
