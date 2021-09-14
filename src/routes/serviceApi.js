import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import {GET_ALL_SERVICES, POST_ITEM, getOneItem, EDIT_ITEM, GET_ALL_SERVICES_BY_PARAMETER, POST_SERVICE, FLAG } from './urls';
import { fetchuser } from '../utils/checkFirstTimeActions';





export const getServicesByUserID = async(token) => {
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
  
  try {
   
  if(user!="nouser"){
      const res = await axios.post(GET_ALL_SERVICES_BY_PARAMETER, params, {
          headers: {
          "Authorization":`Bearer ${user.token}`
          }
          }).then((data)=>{
            // console.log("From Item data",JSON.stringify(data))
            return data.data.data
          })

      return res
        }
   else{
      return "noitems"
   }  
     
   
  } catch (error) {
    console.log(error.message)
  }

}
export const getServicesByType = async(type,id) => {
  
  const params = JSON.stringify({
    "type_id": type
      });
    
   console.log(type)   
  try {
    try {
  
      const res = await axios.post(GET_ALL_SERVICES_BY_PARAMETER, params,{
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


export const addService = async(item) => {
  console.log("Cool services",item)
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
        
      
           const response = await axios.post(POST_SERVICE, params,{
              "headers": {
              "content-type": "application/json",
              "Authorization":`Bearer ${user.token}`
              },
              }).then((data)=>{
                console.log(`Axios Add service:${JSON.stringify(data.data.data)}`)
                return data.data
              })
                
          return response    
         
      }
     catch (error) {
        console.log("error",error.message)
      }
}

export const getAllServices = async () => {
  const params = JSON.stringify({
        "status":"open"
    
      });
      
    try {
      try {
        const res = await axios.post(GET_ALL_SERVICES_BY_PARAMETER, params,{
          "headers": {
          "content-type": "application/json",
          },
          })
        if (res.data) {
          const items = res.data
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

export const getAllService = async () => {
 
    try {
      try {
        const res = await axios.get(GET_ALL_SERVICES)
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
  
    "user_id": id,
    
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

export const editService = async(item) => {
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
      
      const res = await axios.put(`${POST_SERVICE}/${item.id}`,
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

export const deleteService = async(id) => {
  console.log("in delete",id)
  const user = await fetchuser().then((data)=>{return data.data})
  const params = JSON.stringify({

      })
  try {
  
      
      const res = await axios.delete(`${POST_SERVICE}/${id}`,{
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

export const flagService= async(id) => {
  console.log("in flag",id)
  const user = await fetchuser().then((data)=>{return data.data})
  const params = JSON.stringify({
    "reason_id": 13,
    "flagged_item_id": id,
    "flagged_by_id": user.id,
    "type": "service"
  })
  try {
  
  
  const res = await axios.post(FLAG,params,{
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