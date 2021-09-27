import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { GET_ONE_TYPE, GET_ALL_TYPES, GET_ALL_CATEGORY } from './urls';
import { fetchuser } from '../utils/checkFirstTimeActions';


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

export const getOneTypeByName =  async(name) => {
  const token = await fetchuser().then((data)=>{return data.data.token})
  const params = JSON.stringify({
      "name": name
      });
      
  try {
    try {
      const response = await axios.post(GET_ONE_TYPE, params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${token}`
          },
          }).then((data)=>{
              // console.log("Catgory Data",data.data.data[0])
              return data.data.data[0]
          })
          return response
     
    }
  catch (error) {
    // Add custom logic to handle errors
  }
  } catch (error) {
    console.log(error.message)
  }
}

export const getOneTypeByID =  async(id) => {
  const token = await fetchuser().then((data)=>{return data.data.token})
  const params = JSON.stringify({
      "id": id
      });
      
  try {
    try {
      const response = await axios.post(GET_ONE_TYPE, params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${token}`
          },
          }).then((data)=>{
              // console.log("Catgory Data",data.data.data[0])
              return data.data.data[0]
          })
          return response
     
    }
  catch (error) {
    // Add custom logic to handle errors
  }
  } catch (error) {
    console.log(error.message)
  }
}

export const getAllTypesByCategoryID = async(id) => {
  const token = await fetchuser().then((data)=>{return data.data.token})

  const params = JSON.stringify({
      "category_id": id
      });
  // const token = await fetchuser().then((data)=>{return data.data.token})
      
  try {
   
      const res = await axios.post(GET_ONE_TYPE, params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${token}`
          },
          }).then((data)=>{
            console.log("Catgory Data",data.data.data)
            return data.data.data
        })
        return res
   
    
  
  } catch (error) {
    console.log(error.message)
  }
}



export const getAllTypes = async (type) => {
    const token = await fetchuser().then((data)=>{return data.data.token})
    const params = JSON.stringify({
      "used_for":type
    })
   
        try {
          const response = await axios.post(GET_ONE_TYPE,params,{
            "headers": {
            "content-type": "application/json",
            "Authorization":`Bearer ${token}`
            }})
            .then((data)=>{
              // console.log(`Axios type:${JSON.stringify(data.data)}`)
              return {
                message:"successful",
                data: data.data.data
              }
            })
              
        return response  
      }
    
   catch (error) {
        console.log(error.message)
      }
}

export const getAllCategory = async () => {
    
  try {
      try {
        const res = await axios.get(GET_ALL_CATEGORY);
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