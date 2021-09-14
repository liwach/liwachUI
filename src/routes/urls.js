import React from "react"
import { API_URL } from "../utils/config"

//Items
export const getAllItems = `${API_URL}/item`
export const getOneItem = `${API_URL}/item/search`
export const POST_ITEM = `${API_URL}/item`
export const EDIT_ITEM = `${API_URL}/item`

//Services
export const GET_ALL_SERVICES = `${API_URL}/service`
export const GET_ALL_SERVICES_BY_PARAMETER = `${API_URL}/service/search`
export const POST_SERVICE = `${API_URL}/service`

//Type
export const GET_ONE_TYPE = `${API_URL}/type/search`
export const GET_ALL_TYPES = `${API_URL}/type`
export const GET_ALL_CATEGORY = `${API_URL}/category`


//Requests
export const GET_ALL_REQUESTS =  `${API_URL}/request`
export const GET_REQUEST_BY_STATUS = `${API_URL}/request/search`
export const UPDATE_REQUEST_STATUS = `${API_URL}/request`
export const POST_REQUEST =  `${API_URL}/request`

//Message
export const POST_MESSAGE = `${API_URL}/message`
export const GET_MESSAGE_BY_REQUEST = `${API_URL}/message/search`

//Membership
export const POST_MEMBERSHIP = `${API_URL}/membership`
export const GET_ALL_MEMBERSHIP = `${API_URL}/membership`

//User
export const POST_USER =  `${API_URL}/user`
export const LOGIN =  `${API_URL}/user/login`
export const FIND_USER =  `${API_URL}/user/search`

//Media
export const ADD_MEDIA = `${API_URL}/media` 

//flag
export const FLAG = `${API_URL}/flag` 