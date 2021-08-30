import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { POST_ITEM, getOneItem } from './urls';


export const getAllItems = async () => {
    try {
      try {
        const res = await axios.get(`${API_URL}/item`);
        if (res.data) {
          const items = res.data.data
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

export const getItemsByUserID = async(id) => {

  const params = JSON.stringify({
  
    "user_id": "2",
    
      });
      
  try {
    try {
  
      const res = await axios.post(getOneItem, params,{
          "headers": {
          "content-type": "application/json",
          },
          })
      if (res.data) {
        console.log(`Axios:${JSON.stringify(res.data)}`)
        alert(res.data)
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


export const addItem = async(name, description) => {
    
      const params = JSON.stringify({
        "name": name,
        "description": description,
        "picture": "iron.png",
        "swap_type": [
          1,
        ],
        "address": {
          "country": "Ethiopia",
          "city": "Addis Ababa",
          "latitude": 3.444,
          "longitude": 3.444,
          "type": "item"
        },
        "type_id": 4,
        "user_id": 1,
        "status": "unbartered"
          });
          
      try {
        try {
      
          const res = await axios.post(POST_ITEM, params,{
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

