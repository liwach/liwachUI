import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { POST_MESSAGE, GET_MESSAGE_BY_REQUEST,POST_USER, LOGIN, FIND_USER, SUBSCRIBE, GET_SUBSCRIPTION } from './urls';
import { fetchuser } from '../utils/checkFirstTimeActions';


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

export const postUser = async(
    user
) => {
    
      const params = JSON.stringify(
        {
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "password": user.password,
            "profile_picture": user.profile_picture,
            "phone_number": user.phone_number,
            "TIN_picture": user.TIN_picture,
            "status": user.status,
            "birthdate": user.birthdate,
            "type": user.type,
            "address": {
                "country": user.address.country,
                "city": user.address.city,
                "latitude": user.address.latitude,
                "longitude":user.address.longitude,
                "type": user.address.type
            },
            "membership_id": user.membership_id
          } 
      ) 
       
          console.log(params)
        
          
      try {
     
      
          const res = await axios.post(POST_USER, params,{
              "headers": {
              "content-type": "application/json",
              },
              })
          if (res.data) {
            // console.log(`Axios:${JSON.stringify(res.data)}`)
            // alert("Data"+JSON.stringify(res.data))
            return {
              message:"successful",
              data:res.data
            }
          } else {
            console.log('Unable to fetch');
          }
        }
     
      catch (error) {
        console.log(JSON.stringify(error.message))
        return {
          message:"fail"
        }
      }
}

export const login = async (email,password) => {
    const params = JSON.stringify({
       
            "email": email,
            "password": password 
    });
    // console.log(params)
   
        try {
            const res = await axios.post(LOGIN, params,{
                "headers": {
                "content-type": "application/json",
                },
                }).then((data)=>{
                  
                    const user = {
                        id: data.data.data.id,
                        first_name: data.data.data.first_name,
                        last_name: data.data.data.last_name,
                        phone_number :data.data.data.phone_number,
                        email : data.data.data.email,
                        picture: data.data.data.profile_picture,
                        token: data.data.data.remember_token
                    }
                    console.log("user",JSON.stringify(data.data.data))
                    return user
                })
          return res
          
        }
     catch (error) {
        console.log(error.message)
    }
  }
  
  export const getUserByID = async (id) => {
    const user = await fetchuser().then((data)=>{return data.data})
    const params = JSON.stringify({
       
            "id": id
    });
      try {
      
            const res = await axios.post(FIND_USER, params,{
                "headers": {
                "content-type": "application/json",
                "Authorization":`Bearer ${user.token}`
                },
                }).then((data)=>{
                    console.log("user in message",data.data[0])
                    const userData = data.data[0]
                    const user = {
                        id: userData.id,
                        first_name: userData.first_name,
                        last_name: userData.last_name,
                        phone_number : userData.phone_number,
                        email : userData.email,
                        pic : userData.profile_picture
                    }
                    // alert(`Message: ${JSON.stringify(res.data)}`)
                    return user
                
                })
         return res
        
     
      } catch (error) {
        console.log(error.message)
      }
  }

  export const subscribeType = async(id) => {
    const user = await fetchuser().then((data)=>{return data.data})
 
    const params = JSON.stringify({
      "type_id":id,
      "user_id":user.id
      });
    console.log(params)
    try {
     
    
        const res = await axios.post(SUBSCRIBE, params,{
            "headers": {
            "content-type": "application/json",
            "Authorization":`Bearer ${user.token}`
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

  export const getSubscriptions = async() => {
    const user = await fetchuser().then((data)=>{return data.data})
    const params = JSON.stringify({
    
      });
    // console.log(params)
    try {
     
    
        const res = await axios.post(GET_SUBSCRIPTION,params,{
            "headers": {
            "content-type": "application/json",
            "Authorization":`Bearer ${user.token}`
            },
            }).then((data)=>{
              console.log("From Item data",JSON.stringify(data.data))
              return data.data
            })
  
        return res
      
      }
  
     catch (error) {
      console.log(error.message)
    }
  
  
  }