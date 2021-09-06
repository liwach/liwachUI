import React from "react"
import axios from "axios"
import { EDIT_ITEM, UPDATE_REQUEST_STATUS } from "./urls";

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


export const exchangeItem = async(id,status) => {


    const body = JSON.stringify({
        "status": "bartered"
      });
        
    try {
      try {
        
        const res = await axios.put(`${EDIT_ITEM}/${id}`, body,{
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