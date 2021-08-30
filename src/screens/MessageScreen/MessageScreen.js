import React, { useEffect, useState } from "react";
import {View, Text} from 'react-native'
import { getRequestByStatus } from "../../routes/requestApi";
import { fetchuser } from "../../utils/checkFirstTimeActions";
import { MessageList } from "./components/MessageList";
import { getMessageByChatId } from "../../routes/messageApi";
import { ToastAndroid } from "react-native";

export const MessageScreen = ({navigation}) => {

  const [messageList,setMessageList] = useState([])

  const fetchMessages = async() => {
    const user = await fetchuser()
    const response = await getRequestByStatus("accepted")
    if(response!=null){
      const chat_id = response.map( function(data, idx){
        const token = data.token
        const type = data.type
        const id = data.id
        const chat = {token,id,type}
        return(
           data
        )
         
        // setMessageList(response)
      
       });
       

      
       setMessageList(chat_id)
      //  alert("outside"+messages)


    }
   
}
  useEffect( 
    async()=>{
      fetchMessages()
    }
   ,[])

  const DATA = [
    {
      id: "37694a0f-3da1-471f-bd96-145571e29d72",
      title: "White Tshirt",
      category:"Clothes",
      other_user:"Eden Abdisa",
      current_user:"Delilah",
      message:"Hi Delilah, Can you please let me know ...",
      time:"Tue, May 16",
    
    },
   
    {
      id: "37694a0f-3da1-471f-bd96-145571e29d72",
      title: "White Tshirt",
      category:"Clothes",
      other_user:"Christian Girma",
      current_user:"Delilah",
      message: "Hi Delilah, Can you please let me know ...",
      time:"Tue, May 16",
    
    },
    {
      id: "37694a0f-3da1-471f-bd96-145571e29d72",
      title: "White Tshirt",
      category:"Clothes",
      other_user:"Eden Abdisa",
      current_user:"Delilah",
      message: "Hi Delilah, Can you please let me know ...",
      time:"Tue, May 16",
    
    },
    {
      id: "37694a0f-3da1-471f-bd96-145571e29d72",
      title: "White Tshirt",
      category:"Clothes",
      other_user:"Abigya Mengistalem",
      current_user:"Delilah",
      message: "Hi Delilah, Can you please let me know ...",
      time:"Tue, May 16",
    
    },
    {
      id: "37694a0f-3da1-471f-bd96-145571e29d72",
      title: "White Tshirt",
      category:"Clothes",
      other_user:"Eden Abdisa",
      current_user:"Delilah",
      message: "Hi Delilah, Can you please let me know ...",
      time:"Tue, May 16",
    
    },
  ];


    return(
      <View>
         <MessageList navigation={navigation} data={messageList}/>
      </View>
    );

};

