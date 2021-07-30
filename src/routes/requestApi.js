import React from "react"
import { GET_ALL_REQUESTS } from "./urls";
import axios from "axios";

export const getAllRequests = async () => {
    
    try {
      try {
        const res = await axios.get(GET_ALL_REQUESTS,{
            "headers": {
            "content-type": "application/json",
            },
            })
        if (res.data) {
        //console.log(`Axios:${JSON.stringify(res.data)}`)
        const items = res.data.data
        console.log(items)
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
