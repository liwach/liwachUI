import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';
import { GET_ALL_MEMBERSHIP } from './urls';


// export const getOneMembership = async ({id}) => {
//     console.log(id)
//     const params = JSON.stringify({
//         "id": id
//         });
        
//     try {
//       try {
//         const res = await axios.post(GET_ONE_TYPE, params,{
//             "headers": {
//             "content-type": "application/json",
//             },
//             })
//         if (res.data) {
//           //console.log(`Axios:${JSON.stringify(res.data)}`)
//         } else {
//           console.log('Unable to fetch');
//         }
//       }
//     catch (error) {
//       // Add custom logic to handle errors
//     }
//     } catch (error) {
//       console.log(error.message)
//     }
// }

// export const getOneMembership = async () => {
  

      
//   try {
//     try {
//       const res = await axios.post(GET_ALL_MEMBERSHIP,{
//           "headers": {
//           "content-type": "application/json",
//           },
//           })
//       if (res.data) {
//        console.log(`Axios:${JSON.stringify(res.data)}`)
//       } else {
//         console.log('Unable to fetch');
//       }
//     }
//   catch (error) {
//     // Add custom logic to handle errors
//   }
//   } catch (error) {
//     console.log(error.message)
//   }
// }


export const getAllMembership= async () => {
    
    try {
        try {
          const res = await axios.get(GET_ALL_MEMBERSHIP);
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