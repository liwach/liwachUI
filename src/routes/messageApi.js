import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { POST_MESSAGE, GET_MESSAGE_BY_REQUEST } from './urls';
import { getRequestByStatus } from './requestApi';
import { fetchuser } from '../utils/checkFirstTimeActions';


export const getAllMessageByID = async(id) => {
  //Gets All Accepted Requests of My Items, All of my accepted requests
  //Get the token of each request
  //Get list of messages of each token

   const acceptedRequests = await getRequestByStatus("accepted")
   alert(JSON.stringify(acceptedRequests))
}


export const getMessageByChatId = async(token) => {
  
  const params = JSON.stringify(
    {
    "chat_id": token,
    }
  );
    try {
      try {
       
        const res = await axios.post(GET_MESSAGE_BY_REQUEST,params,{
          "headers": {
          "content-type": "application/json",
          },
          })
        if (res.data) {
          const items = res.data
          // alert(JSON.stringify("Items "+JSON.stringify(res.data)))
          return res.data
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


export const getAllMessagesByChatID = async(token) => {
  const user = await fetchuser().then((data)=>{return data.data})
  const body = JSON.stringify({
    "chat_id": token,
  });
    try {
   
        const res = await axios.post(GET_MESSAGE_BY_REQUEST,body,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${user.token}`
          },
          }).then((data)=>{
            console.log("Messages",JSON.stringify(data))
              return data.data
          })
          return res
    } catch (error) {
      console.log(error.message)
    }


}



export const getMessageByRequest = async (token) => {
  const user = await fetchuser().then((data)=>{return data.data})
  const body = JSON.stringify({
    "chat_id": token,
  });
    try {
   
        const res = await axios.post(GET_MESSAGE_BY_REQUEST,params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${token}`
          },
          }).then((data)=>{
              return data.data.data
          })
          return res
    } catch (error) {
      console.log(error.message)
    }
}

export const sendMessage = async(content, type,chat_id,sender_id) => {
  const user = await fetchuser().then((data)=>{return data.data})
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
       
      
          const res = await axios.post(POST_MESSAGE, params,{
              "headers": {
              "content-type": "application/json",
              "Authorization":`Bearer ${user.token}`
            },
            }).then((data)=>{
              console.log(data.data)
                return data.data
            })
            return res
       
 
      } catch (error) {
        console.log(error.message)
      }
}

