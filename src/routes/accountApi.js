import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { POST_MESSAGE, GET_MESSAGE_BY_REQUEST,POST_USER, LOGIN } from './urls';


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
            "membership_id": 4
          } 
      ) 
       
          console.log(params)
          alert("Params"+params)
          
      try {
        try {
      
          const res = await axios.post(POST_USER, params,{
              "headers": {
              "content-type": "application/json",
              },
              })
          if (res.data) {
            console.log(`Axios:${JSON.stringify(res.data)}`)
            alert("Data"+JSON.stringify(res.data))
            return res.data
          } else {
            console.log('Unable to fetch');
          }
        }
      catch (error) {
        // Add custom logic to handle errors
        alert("Data"+error)

      }
      } catch (error) {
        console.log(error.message)
        alert(error)
      }
}

export const login = async (email,password) => {
    const params = JSON.stringify({
       
            "email": email,
            "password": password 
    });
      try {
        try {
            const res = await axios.post(LOGIN, params,{
                "headers": {
                "content-type": "application/json",
                },
                })
          if (res.data) {
            const user = {
                id: res.data.id,
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                phone_number : res.data.phone_number,
                email : res.data.email
            }
            // alert(`Message: ${user}`)
            return user
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
  