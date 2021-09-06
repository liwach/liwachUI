import React, { useEffect, useState } from "react";
import {View, Text} from 'react-native'
import { getRequestByStatus, getRequestByStatusByID } from "../../routes/requestApi";
import { fetchuser } from "../../utils/checkFirstTimeActions";
import { MessageList } from "./components/MessageList";
import { getMessageByChatId } from "../../routes/messageApi";
import { ToastAndroid } from "react-native";

export const MessageScreen = ({navigation}) => {

  const [messageList,setMessageList] = useState([])

  const fetchMessages = async() => {
    const user = await fetchuser()
    const response = await getRequestByStatusByID(user.id,"expired")
    // alert(JSON.stringify(response))
    const responseExpired = await getRequestByStatus("expired")
    // alert(JSON.stringify(responseExpired))
    // if(response!=null||responseExpired){
    //   const chat_id = response.map( function(data, idx){
    //     const token = data.token
    //     const type = data.type
    //     const id = data.id
    //     const chat = {token,id,type}
    //     return(
    //        data
    //     )
         
    //     // setMessageList(response)
      
    //    });
    //    const chat_id = responseExpired.map( function(data, idx){
    //   const token = data.token
    //   const type = data.type
    //   const id = data.id
    //   const chat = {token,id,type}
        
         
    //     // setMessageList(response)
      
    //    });

      
       setMessageList(response)
    //   //  alert("outside"+messages)


    // }
   
}
  useEffect( 
    async()=>{
      fetchMessages()
    }
   ,[])


    return(
      <View>
         <MessageList navigation={navigation} data={messageList}/>
      </View>
    );

};

