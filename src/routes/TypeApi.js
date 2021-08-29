import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { GET_ONE_TYPE, GET_ALL_TYPES } from './urls';


export const getOneType = async ({id}) => {
    console.log(id)
    const params = JSON.stringify({
        "id": id
        });
        
    try {
      try {
        const res = await axios.post(GET_ONE_TYPE, params,{
            "headers": {
            "content-type": "application/json",
            },
            })
        if (res.data) {
          //console.log(`Axios:${JSON.stringify(res.data)}`)
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

export const getOneTypeByName = async ({name}) => {
  console.log(id)
  const params = JSON.stringify({
      "name": name
      });
      
  try {
    try {
      const res = await axios.post(GET_ONE_TYPE, params,{
          "headers": {
          "content-type": "application/json",
          },
          })
      if (res.data) {
        //console.log(`Axios:${JSON.stringify(res.data)}`)
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


export const getAllTypes = async () => {
    
    try {
        try {
          const res = await axios.get(GET_ALL_TYPES);
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