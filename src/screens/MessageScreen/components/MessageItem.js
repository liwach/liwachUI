import React,{useEffect,useState} from "react"
import {
TouchableOpacity,
View,
Image,
Text,
StyleSheet
} from 'react-native'
import {colors} from '../../../utils/colors'
import UserAvatar from "@muhzi/react-native-user-avatar"
import { getAllMessagesByChatID, getMessageByChatId } from "../../../routes/messageApi"

export const MessageItem = ({item,onPress}) => {
    // alert(item.item.token)
    const [msg,setMsg] = useState(null)
    const getMessage = async() => {
        const msg = await getAllMessagesByChatID(item.item.token)
        alert(JSON.stringify(msg))
        setMsg(msg)
    }

    useEffect(()=>{
        getMessage()
    },[])

    return(
        <TouchableOpacity style={[styles.item]} onPress={onPress}>
        <View>           

              <UserAvatar
              userName={`${item.item.requester.first_name} ${item.item.requester.last_name}`}
              size={60}
              backgroundColor={colors.flord_intro}
              fontSize={20}
              // url={image}
              />
       </View>
        <View>
            <Text style={[styles.title, styles.text]}>{item.item.requested_item.name}</Text>
            <Text style={[styles.category]}>{item.item.requested_item.status}</Text>
            <Text style={[styles.text]}>{msg!==null&&msg.length>0? item.item.requester.first_name+" : "+msg[msg.length-1].content:"No message"}</Text>
        </View>
        <View style={[styles.time]}>
        <Text style={[styles.time]}>{item.time}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container:{
        marginTop: 10, 
        margin:15,
        elevation:2,
        padding:5,
    },
    item:{
        padding:10,
        flexDirection: "row",
        backgroundColor:colors.background,
        color:colors.white,
        
       
        minWidth:80,
     
        borderBottomWidth:0.5,
        borderColor:colors.grey,
    
    },
    text:{
        marginLeft:10,
        marginTop:5,
        color:colors.primary,
        width:200
    },
    title:{
        color:colors.primary,
        fontSize:16,
        fontWeight:'bold'
    },
    imageBox:{
        width:50,
        height:50,
        borderRadius:40,
        margin:10
    },
    category:{
        backgroundColor: colors.flord_intro2,
        borderRadius: 20,
        color: colors.primary,
        textAlign: 'center',
        width: 80,
        padding:2,
        marginLeft:10,
        marginTop:5,
        fontSize:15,

    },
    time:{
        margin:5,
        flex:1,
        fontSize:10,
        alignSelf:'flex-end',
        justifyContent:'flex-start',
        color:colors.primary
    }


})