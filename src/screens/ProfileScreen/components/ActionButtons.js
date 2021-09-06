import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { StyleSheet,Button } from "react-native"
import { colors } from "../../../utils/colors"
import { exchangeItem } from "../../../routes/exchangeApi"
import Icon  from "react-native-vector-icons/Ionicons";
import { expire } from "../../../routes/requestApi"



const exchange = async(item) => {

    const response = await exchangeItem(item.requested_item.id,item.requested_item.status)
    const expireRequest = await expire(item.id) 
    alert(expireRequest)
}


export const ExchangeButton = ({item}) => {
 //exchangeItem(item.id,item.status)
    return(
        <Icon name="swap-horizontal" size={30} color={colors.primary} onPress={()=>{exchange(item)}}/>
    )

}

export const ChatButton = ({item,navigation}) => {
    console.log(item)

    return (
        <Icon name="chatbubble-ellipses" size={30} color={colors.flord_intro2} onPress={() => 
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
