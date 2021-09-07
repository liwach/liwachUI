import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { POST_ITEM, getOneItem, EDIT_ITEM } from './urls';

export const getItemsById= async(id) => {

  const params = JSON.stringify({
  
    "id": id
      });
      
  try {
    try {
  
      const res = await axios.post(getOneItem, params,{
          "headers": {
          "content-type": "application/json",
          },
          })
      if (res.data) {
        console.log(`By ID Axios:${JSON.stringify(res.data)}`)
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

export const getItemsByName= async(name) => {

  const params = JSON.stringify({
  
    "name": name
      });
      
  try {
    try {
  
      const res = await axios.post(getOneItem, params,{
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

export const getAllItems = async () => {
  const params = JSON.stringify({
  
    "status": "open"
    
      });
      
    try {
      try {
        const res = await axios.post(`${API_URL}/item/search`, params,{
          "headers": {
          "content-type": "application/json",
          },
          })
        if (res.data) {
          const items = res.data
          console.log(items)
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
  
    "user_id": id,
    
    "status": "open"
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

export const getItemsByType = async(type,id) => {
  
  const params = JSON.stringify({
    "type_id": type
      });
    
   console.log(type)   
  try {
    try {
  
      const res = await axios.post(getOneItem, params,{
          "headers": {
          "content-type": "application/json",
          },
          })
      if (res.data) {
        console.log(`Axios:${JSON.stringify(res.data)}`)
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



export const getItemsByStatus = async(id,status) => {

  const params = JSON.stringify({
  
    "user_id": id,
    
    "status": status
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

export const addItem = async(item) => {
    
  const params = JSON.stringify({
      "name": item.name,
      "description":item.description,
      "picture": item.picture,
      "swap_type": item.swap_type,
      "address": {
        "country": item.address.country,
        "city": item.address.city,
        "latitude": item.address.latitude,
        "longitude": item.address.longitude,
        "type": item.address.type
      },
      "type_id": item.type_id,
      "user_id": item.user_id,
      "status": item.status
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
            return {
              message:"successful",
              data: res.data
            }
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

export const editItem = async(item) => {
  // {
  //   "name": "edited car",
  //   "description": "Car is machine used to....",
  //   "media": [
  //     "url link",
  //     "url link"
  //   ],
  //   "swap_type": [
  //     1,
  //     3,
  //     2,
  //     4
  //   ],
  //   "address": {
  //     "country": "Ethiopia",
  //     "city": "Addis Ababa",
  //     "latitude": 3.444,
  //     "longitude": 3.444,
  //     "type": "user, item, service"
  //   },
  //   "type_id": 4,
  //   "user_id": 43,
  //   "status": "unbartered"
  // }
  console.log("IDDD item",item.id)
  const body = JSON.stringify({
    "name": item.name,
    "description":item.description,
    "media": item.picture,
    "swap_type": item.swap_type,
    "address": {
      "country": item.country,
      "city": item.city,
      "latitude": item.latitude,
      "longitude": item.longitude,
      "type": item.type
    },
    "type_id": item.type_id,
    "user_id": item.user_id,
    "status": item.status
    });
      
  try {
    try {
      
      const res = await axios.put(`${EDIT_ITEM}/${item.id}`, body,{
          "headers": {
          "content-type": "application/json",
          },
          })
      if (res.data) {
        console.log(`Axios:${JSON.stringify(res.data)}`)
        return {
          message:"successful",
          data: res.data
        }
      } else {
        console.log('Unable to fetch');
      }
    }
  catch (error) {
    console.log(error.message)
  }
  } catch (error) {
    console.log(error.message)
  }
}