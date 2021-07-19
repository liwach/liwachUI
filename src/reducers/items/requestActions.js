import { API_URL } from "../../utils/config";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const ITEM_LOADING = "ITEM_LOADING";
export const ITEM_FAILURE = "ITEM_FAILURE";
export const ADD_ITEM = "ADD_ITEM";


export const requestItem = () => {
 
    //  return fetch('http://liwachapi.herokuapp.com/api/item')
    //  .then((response) => response.json())
    //  .then((json) => console.log(json))
    //  .catch((error) => console.error(error))
    //  .finally(() => console.error("error"));
  
    fetch('http://liwachapi.herokuapp.com/api/request', 
    {  method: 'POST', 
     headers: {   
        Accept: 'application/json',  
          'Content-Type': 'application/json'
          },  body: JSON.stringify({
            "status": "accepted or declined or expired",
            "requester_id": 4,
            "requested_item_id": 7,
            "requester_item_id": 5,
            "rating": 2,
            "token": "srrwgwrgt",
            "type": 9
            })}).then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => console.error(`Catch ${error}`)) 
    
  };

  export const fetchRequests = () => {
 
     return fetch('http://liwachapi.herokuapp.com/api/request')
     .then((response) => response.json())
     .then((json) => console.log(json))
     .catch((error) => console.error(error))
     .finally(() => console.error("error"));
  
   
  };
  
  export const addUser = () => {
 
    //  return fetch('http://liwachapi.herokuapp.com/api/item')
    //  .then((response) => response.json())
    //  .then((json) => console.log(json))
    //  .catch((error) => console.error(error))
    //  .finally(() => console.error("error"));
  
    fetch('http://liwachapi.herokuapp.com/api/user', 
    {  method: 'POST', 
     headers: {   
        Accept: 'application/json',  
          'Content-Type': 'application/json'
          },  body: JSON.stringify({
            
                "first_name": "Delilah",
                "last_name": "Dessalegn ",
                "email": "delilahdessalegn@gmail.com",
                "profile_picture": "myprofile.jpg",
                "phone_number": "+251923289633",
                "TIN_picture": "mytin.jpg",
                "status": "active",
                "birthdate": "1998-02-14",
                "type": "user",
                "address_id": 1,
                "membership_id": 1,
                "email_verified_at": "2020-01-27 17:50:45",
                "rememberToken": "dkdjfldkfjdlkfj"
              
            })}).then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => console.error(`Catch ${error}`)) 
    
  };
  