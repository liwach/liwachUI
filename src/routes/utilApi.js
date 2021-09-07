import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { ADD_MEDIA} from './urls';


export const uploadPicture = async(image) => {
    
  const params = JSON.stringify({
    "item_id": image.id,
    "type": image.type,
    "url": image.url
  });
      
  try {
    try {
  
      const res = await axios.post(ADD_MEDIA, params,{
          "headers": {
          "content-type": "application/json",
          },
          })
      if (res.data) {
        console.log(`By Name Axios:${JSON.stringify(res.data)}`)
        // alert(res.data)
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