import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { POST_ITEM, getOneItem,getAllItems, EDIT_ITEM, FLAG } from './urls';
import { fetchuser } from '../utils/checkFirstTimeActions';

export const getItemsById= async(id) => {
  const user = await fetchuser().then((data)=>{return data.data})
  const params = JSON.stringify({
    "id": id
      });
  // console.log(params)
  try {
   
  
      const res = await axios.post(getOneItem, params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${user.token}`
          },
          }).then((data)=>{
            // console.log("From Item data",JSON.stringify(data.data.data))
            return data.data.data
          })

      return res
    
    }

   catch (error) {
    console.log(error.message)
  }


}

export const getItemsByName= async(name) => {
  const user = await fetchuser().then((data)=>{return data.data})
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

export const getItemsByUserID = async() => {
  // console.log("From Item",id)
  const user = await fetchuser().then((data)=>{
    if(data==null){
      return "nouser"
    }
    else{
      return data.data
    }

  })
  const params = JSON.stringify({
    
      });
      console.log("From Item",user.token)
  try {
   
  if(user!="nouser"){
      const res = await axios.post(getOneItem, params, {
          headers: {
          "Authorization":`Bearer ${user.token}`
          }
          }).then((data)=>{
            console.log(data.data.data)
            return data.data.data
          })

      return res
        }
   else{
      return "noitems"
   }  
     
   
  } catch (error) {
    console.log("Items API",error.message)
    return "noitems"
  }


}

export const getItemsByType = async(type) => {
  const user = await fetchuser().then((data)=>{return data.data})
  const params = JSON.stringify({
    "type_id": type
      });
    
  //  console.log("type",type)   
  try {
    try {
  
      const res = await axios.post(getOneItem, params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${user.token}`
          },
          }).then((data)=>{
            return data.data
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



export const getItemsByStatus = async(status) => {
  const user = await fetchuser().then((data)=>{return data.data})
  const params = JSON.stringify({

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
  const user = await fetchuser().then((data)=>{return data.data})
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
              "Authorization":`Bearer ${user.token}`
              },
              }).then((data)=>{
                console.log(`Axios Add item:${JSON.stringify(data.data.data)}`)
                return data.data
              })
                
          return response    
         
      }
     catch (error) {
        console.log("error",error.message)
      }
}

export const editItem = async(item) => {
  // console.log("IDDD item",item.id)
  const user = await fetchuser().then((data)=>{return data.data})
  const body = JSON.stringify({
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
     console.log(body) 
 
    try {
      
      const res = await axios.put(`${EDIT_ITEM}/${item.id}`,
      body,{
        "headers": {
        "content-type": "application/json",
        "Authorization":`Bearer ${user.token}`
        },
      }).then((data)=>{
       
          // console.log(`Axios:${JSON.stringify(data.data.data.item_swap_type)}`)
          return data.data.success
          
      })
     return res
    }
 
 catch (error) {
    console.log(error.message)
  }
}

export const flagItem = async(id) => {
      console.log("in delete",id)
      const user = await fetchuser().then((data)=>{return data.data})
      const params = JSON.stringify({
        "reason_id": 15,
        "flagged_item_id": id,
        "flagged_by_id": user.id,
        "type": "item"
      })
      console.log(user.token)
      try {
      
      
      const res = await axios.post(FLAG,params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${user.token}`
          },
          }).then((data)=>{
              console.log("Flagged Item",JSON.stringify(data))
              return data.data.success
          })
    return res

  } catch (error) {
    console.log("hello",error.message)
  }
}

export const deleteItem = async(id) => {
  console.log("in delete",id)
  const user = await fetchuser().then((data)=>{return data.data})
  const params = JSON.stringify({

      })
  try {
  
      
      const res = await axios.delete(`${EDIT_ITEM}/${id}`,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${user.token}`
          },
          }).then((data)=>{
              console.log("Deleted Item",JSON.stringify(data.data))
              return data.data.success
          })
    return res

  } catch (error) {
    console.log("hello",error.message)
  }
}