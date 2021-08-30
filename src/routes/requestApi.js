import React from "react"
import { GET_ALL_REQUESTS, GET_REQUEST_BY_STATUS } from "./urls";
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

export const getRequestByStatus = async (status) => {
  const body = JSON.stringify({
    "status": status,
  });
  
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


export const getLocation = async (text) => {
  console.log(text)
  try {
    try {
      const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?types=place&access_token=pk.eyJ1IjoibGl3YWNoIiwiYSI6ImNrcmhjZmZqNDBpNWQycHBnMGNpeDN1dW4ifQ.gWe-VTYxuBeEHNEwc1eY_w`,{
        "headers": {
        "content-type": "application/json",
        },
        })
      //console.log('',res.data.features)
      if (res.data) {
        console.log("I am in here")
        // const swap_types = 
        //   res.data.features.map(function({data, index}){
        //     console.log(`dataswap:${data.place_name} `)
            
        //         return(
                  
        //             {
        //             index: data.place_name,
        //             }
                  
                 
        //         )
        //        });
            
          //console.log(`GetLocationswap${JSON.stringify(swap_types)}`)
          // console.log("Place name",res.data.features)

          return res.data
        
      } else {
        console.log(res);
      }
    }
  catch (error) {
    // Add custom logic to handle errors
  }
  } catch (error) {
    console.log(error.message)
  }

}
