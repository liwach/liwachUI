import React from "react";
import {View, Text} from 'react-native'
import { MessageList } from "./components/MessageList";
export const MessageScreen = ({navigation}) => {

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
      other_user:"Eden Abdisa",
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
      other_user:"Eden Abdisa",
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

