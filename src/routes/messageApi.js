import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { POST_MESSAGE, GET_MESSAGE_BY_REQUEST } from './urls';


export const getMessageByRequest = async ({token}) => {
  const body = JSON.stringify({
    "chat_id": "srrwgwrgt",
  });
    try {
      try {
        const res = await axios.get(GET_MESSAGE_BY_REQUEST);
        if (res.data) {
          const items = res.data.data
          alert(`Message: ${items}`)
          return items
        } else {
          console.log('Unable to fetch');
        }
      }
    catch (error) {
      // Add custom logic to handle errors
    }
    } catch (error) {
      console.log(error.message)
    }
}

export const sendMessage = async(content, type,chat_id,sender_id) => {
    
      const params = JSON.stringify(
        {
            "content": content,
            "type": type,
            "chat_id": chat_id,
            "sender_id": sender_id
          } 
      ) 
       
          console.log(params)
          
      try {
        try {
      
          const res = await axios.post(POST_MESSAGE, params,{
              "headers": {
              "content-type": "application/json",
              },
              })
          if (res.data) {
            console.log(`Axios:${JSON.stringify(res.data)}`)
            
          } else {
            console.log('Unable to fetch');
          }
        }
      catch (error) {
        // Add custom logic to handle errors
      }
      } catch (error) {
        console.log(error.message)
      }
}
