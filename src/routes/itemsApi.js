import React from 'react'
import axios from "axios";
import { API_URL } from '../utils/config';


export const getAllItems = async () => {
    try {
      try {
        const res = await axios.get(`${API_URL}/item`);
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