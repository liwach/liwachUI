import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import {ADD_MEDIA, GET_MEDIA} from './urls';
import { fetchuser } from '../utils/checkFirstTimeActions';



export const getMediasByItem = async(id) => {
  const user = await fetchuser().then((data)=>{return data.data})
  const params = JSON.stringify({
    "item_id": id
      });
  // console.log(params)
  try {
   
  
      const res = await axios.post(GET_MEDIA, params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${user.token}`
          },
          }).then((data)=>{
            // console.log("From Item data",JSON.stringify(data.data.data))
            return data.data
          })

      return res
    
    }

   catch (error) {
    console.log(error.message)
  }


}

export const addMedia = async(media,token) => {
    // console.log("From Item",id)
    const media_urls = []
    media_urls.push(media.url)
    const params = JSON.stringify({
        "item_id": media.id,
        "type": media.type,
        "url": media_urls
      });
    console.log(params)
    try {
     
    
        const res = await axios.post(ADD_MEDIA, params,{
            "headers": {
            "content-type": "application/json",
            "Authorization":`Bearer ${token}`
            }
            }).then((data)=>{
              // console.log(`Axios Get Item:${JSON.stringify(data)}`)
              return data.data
            })
        
        return res
        
       
     
    } catch (error) {
      console.log(error.message)
    }
  
  
  }