import React from "react"
import axios from "axios"
import { UPDATE_REQUEST_STATUS } from "./urls";


export const exchangeItem = async(id,status) => {


    const body = JSON.stringify({
        "status": "expired",
      });
        
    try {
      try {
        
        const res = await axios.put(`${UPDATE_REQUEST_STATUS}/${id}`, body,{
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