import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { StyleSheet,Button } from "react-native"
import { colors } from "../../../utils/colors"
import { exchangeItem } from "../../../routes/exchangeApi"
import Icon  from "react-native-vector-icons/Ionicons";
import { expire } from "../../../routes/requestApi"



const exchange = async(item) => {
console.log("inside xchange",item)
    const response = await exchangeItem(item.requested_item_id).then(async(data)=>{
        if(data){
            const response = await expire(item.id).then((data)=>{
                return data
        })
        return response
        }
    })
   return response
   
   
}


export const ExchangeButton = ({item,fetch}) => {
  
    const requested_item = item
    
    console.log("exc",requested_item)
 //exchangeItem(item.id,item.status)
    return(
        <Icon name="swap-horizontal" size={40} color={colors.water} onPress={async()=>{
        fetch()
         const resp = await exchange(requested_item).then((data)=>{
            if(data){
                fetch()
            }
         })
        }}/>
    )

}

export const ChatButton = ({item,navigation}) => {
    console.log(item)

    return (
        <Icon name="chatbubble-ellipses" size={40} color={colors.water} onPress={() => 
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
