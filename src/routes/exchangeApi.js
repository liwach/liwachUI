import React from "react"
import axios from "axios"
import { EDIT_ITEM, UPDATE_REQUEST_STATUS } from "./urls";
import { fetchuser } from "../utils/checkFirstTimeActions";

export const getRequestByStatus = async (id,status) => {
  const body = JSON.stringify({
    "requester_id":id,
    "status": status
  });

  console.log(body)
  
  try {
    try {
      const res = await axios.post(GET_REQUEST_BY_STATUS,body,{
          "headers": {
          "content-type": "application/json",
          },
          })
      if (res.data) {
      //console.log(`Axios:${JSON.stringify(res.data)}`)
      const items = res.data
      
      return items
      } else {
        console.log('Unable to fetch');
        alert("Can't")
      }
    }
  catch (error) {
    // Add custom logic to handle errors
    alert("Can't")
  }
  } catch (error) {
    console.log(error.message)
    alert("Can't")
  }
}


export const exchangeItem = async(id) => {

  const user = await fetchuser().then((data)=>{return data.data})
    console.log("id in exc",id)
    const body = JSON.stringify({
        "status": "bartered"
      });
        
    try {
        
          const res = await axios.put(`${EDIT_ITEM}/${id}`,
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