import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import {ADD_MEDIA} from './urls';

export const addMedia = async(media,token) => {
    // console.log("From Item",id)
    const params = JSON.stringify({
        "item_id": media.id,
        "type": media.type,
        "url": media.url
      });
        
    try {
     
    
        const res = await axios.post(ADD_MEDIA, params,{
            "headers": {
            "content-type": "application/json",
            "Authorization":`Bearer ${token}`
            }
            }).then((data)=>{
              console.log(`Axios Get Item:${JSON.stringify(data)}`)
              return data.data
            })
  
        return res
        
       
     
    } catch (error) {
      console.log(error.message)
    }
  
  
  }