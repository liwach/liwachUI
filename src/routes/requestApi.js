import React from "react"
import { getOneItem, GET_ALL_REQUESTS, GET_REQUEST_BY_STATUS, POST_REQUEST, UPDATE_REQUEST_STATUS } from "./urls";
import axios from "axios";
import { fetchuser } from "../utils/checkFirstTimeActions";






export const getAllRequestsByMultipleItems = async (user_id) => {
  const allItems = JSON.stringify({
    "user_id": user_id,
  });

  const body = JSON.stringify({
 "requested_item_id": id,
});
 try {
   try {
    const resp = await axios.post(getOneItem,allItems,{
      "headers": {
      "content-type": "application/json",
      },
      })
      const listItem = res.data.map(async function(data, idx){
        const items = await getAllRequestsByItemID(data.id)
       
        console.log("Requests of all items",items)
         
      });


     const res = await axios.post(GET_REQUEST_BY_STATUS,body,{
       "headers": {
       "content-type": "application/json",
       },
       })
     if (res.data) {
     // console.log(`Axios:${JSON.stringify(res.data)}`)
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


export const getAllRequestsByItemID = async (id) => {

     const body = JSON.stringify({
    "requested_item_id": id,
  });
    try {
      try {
        const res = await axios.post(GET_REQUEST_BY_STATUS,body,{
          "headers": {
          "content-type": "application/json",
          },
          })
        if (res.data) {
        // console.log(`Axios:${JSON.stringify(res.data)}`)
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

export const getAllRequestsBySenderID = async () => {
  const user = await fetchuser().then((data)=>{
    return data.data
  })
  const body = JSON.stringify({

  });
  try {
   
      const res = await axios.post(GET_REQUEST_BY_STATUS,body,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${user.token}`
          },
          })
          .then((data)=>{
            console.log("From Request data",JSON.stringify(data.data))
            return data.data
          })

      return res

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
      // console.log(`Axios:${JSON.stringify(res.data)}`)
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

export const getRequestByStatusByID = async (id,status) => {
  const body = JSON.stringify({
    "requester_id":id,
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
      // console.log(`Axios:${JSON.stringify(res.data)}`)
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

export const acceptRequests = async (request) => {
  const body = JSON.stringify({
        "id":request.id,
        "status": request.status,
       
  });
  
  try {
    try {
   
      const res = await axios.put(`${GET_ALL_REQUESTS}/${request.id}`, body,{
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

export const addRequest = async(item) => {
  const user = await fetchuser().then((data)=>{return data.data})
  const params = JSON.stringify({
    "status": item.status,
    "requester_id": item.requester_id,
    "requested_item_id": item.requested_item_id,
    "requester_item_id": item.requester_item_id,
    "rating": item.rating,
    "token": item.token,
    "type": item.type
  });

  console.log("Params in request",params)
    
  try {
    
  
      const res = await axios.post(POST_REQUEST, params,{
          "headers": {
          "content-type": "application/json",
          "Authorization":`Bearer ${user.token}`
          },
          }).then((data)=>{
            console.log("Request sent",JSON.stringify(data.data))
            return data.data.success
        })
      return res
     
  } catch (error) {
    console.log(error.message)
  }
}

export const expire = async(id) => {
  
  alert("exchange",id)

  const body = JSON.stringify({
      "status": "expired"
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
