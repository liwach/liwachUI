import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { POST_ITEM, getOneItem,getAllItems, EDIT_ITEM } from './urls';
import { fetchuser } from '../utils/checkFirstTimeActions';

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

export const getAllItem = async () => {
 
      
 
      try {
        const res = await axios.get(getAllItems)
        if (res.data) {
          const items = res.data.data
          // console.log("Items in api",items)
          return items
        } else {
          console.log('Unable to fetch');
        }
      }
   
  catch (error) {
      console.log(error.message)
    }
}

export const getItemsByUserID = async(id) => {
  console.log("From Item",id)
  const user = await fetchuser().then((data)=>{return data.data})
  const params = JSON.stringify({
    "user_id": user.id
      });
      
  try {
   
  
      const res = await axios.post(getOneItem, params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${user.token}`
          }
          }).then((data)=>{
            // console.log("From Item",JSON.stringify(data.data.data))
            return data.data.data
          })

      return res
      
     
   
  } catch (error) {
    console.log(error.message)
  }


}

export const getItemsByType = async(type,id) => {
  const user = await fetchuser().then((data)=>{return data.data})
  const params = JSON.stringify({
    "type_id": type
      });
    
   console.log(type)   
  try {
    try {
  
      const res = await axios.post(getOneItem, params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${user.token}`
          },
          }).then((data)=>{
             console.log(JSON.stringify(data.data))
          })
     
    }
  catch (error) {
    // Add custom logic to handle errors
  }
  } catch (error) {
    console.log(error.message)
  }


}



export const getItemsByStatus = async(status) => {
  const user = await fetchuser().then((data)=>{return data.data})
  const params = JSON.stringify({
  
    "user_id": user.id,
    
    "status": status
      });
      
  try {
    try {
  
      const res = await axios.post(getOneItem, params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${user.token}`
          },
          }).then((data)=>{
            // console.log(JSON.stringify(data.data))
            return data.data.data
         })
         return res
    }
  catch (error) {
    // Add custom logic to handle errors
  }
  } catch (error) {
    console.log(error.message)
  }


}

export const addItem = async(item,token) => {
  console.log("Cool items",item)
  const params = JSON.stringify({
      "name": item.name,
      "description":item.description,
      "picture": item.picture,
      "media":[],
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
      console.log(item)
      console.log(params)
      try {
        
      
           const response = await axios.post(POST_ITEM, params,{
              "headers": {
              "content-type": "application/json",
              "Authorization":`Bearer ${token}`
              },
              }).then((data)=>{
                console.log(`Axios Add item:${JSON.stringify(data.data.data)}`)
                return {
                  message:"successful",
                  data: data.data.data
                }
              })
                
          return response    
         
      }
     catch (error) {
        console.log("error",error.message)
      }
}

export const editItem = async(item) => {
  console.log("IDDD item",item.id)
  const body = JSON.stringify({
    "name": item.name,
    "description":item.description,
    "picture": item.picture,
    // "swap_type": item.swap_type,
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
      
      const res = await axios.put(`${EDIT_ITEM}/${item.id}`)
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

export const deleteItem = async(id) => {
 
      console.log(id)
  try {
    try {
      
      const res = await axios.delete(`${EDIT_ITEM}/${id}`,{
          "headers": {
          "content-type": "application/json",
          },
          })

      if (res.status==204) {
        console.log(`Axios:${JSON.stringify(res)}`)
        return {
          message:"successful"
        }
      } 
      else {
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