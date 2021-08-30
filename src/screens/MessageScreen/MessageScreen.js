import React, { useEffect } from "react";
import {View, Text} from 'react-native'
import { getRequestByStatus } from "../../routes/requestApi";
import { fetchuser } from "../../utils/checkFirstTimeActions";
import { MessageList } from "./components/MessageList";
export const MessageScreen = ({navigation}) => {
  const fetchMessages = async() => {
    const user = await fetchuser()
    const response = await getRequestByStatus("accepted")
    alert(JSON.stringify(response))
    if(response){
      const chat_id = response.map(function(data, idx){
        const messageList =  getMessageByChatId(data.token)
        alert(messageList)
        
       });
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
         <MessageList navigation={navigation} data={DATA}/>
      </View>
    );

};

