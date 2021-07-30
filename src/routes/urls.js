import React from "react"
import { API_URL } from "../utils/config"

//Items
export const getAllItems = `${API_URL}/item`
export const getOneItem = `${API_URL}/item/search`
export const POST_ITEM = `${API_URL}/item`

//Type
export const GET_ONE_TYPE = `${API_URL}/type/search`
export const GET_ALL_TYPES = `${API_URL}/type`

//Requests
export const GET_ALL_REQUESTS =  `${API_URL}/request`