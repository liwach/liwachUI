import { API_URL } from "../../utils/config";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const ITEM_LOADING = "ITEM_LOADING";
export const ITEM_FAILURE = "ITEM_FAILURE";
export const ADD_ITEM = "ADD_ITEM";


export const getItem = () => {
  try {
      const res = axios.get(`${API_URL}/item`);
      if (res.data) {
        console.log(res.data)
      } else {
        console.log('Unable to fetch');
      }
    }
  catch (error) {
    // Add custom logic to handle errors
  }
  re
};



export const getItems = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${API_URL}/item`);
      if (res.data) {
        dispatch({
          type: FETCH_ITEMS,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};


export const fetchitems = () => {
  return async (dispatch) => {
    dispatch({
      type: ITEM_LOADING,
    });
    try {
      const response = fetch(`${API_URL}/item`, {
          method: "GET",
        });

      if (!response.ok) {
        dispatch({
          type: ITEM_FAILURE,
        });
        throw new Error("Something went wrong!, can't get the items");
      }
      const resData = await response.json();
      dispatch({
        type: FETCH_ITEMS,
        items: resData.content,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchItem = () => {
 
  //  return fetch('http://liwachapi.herokuapp.com/api/item')
  //  .then((response) => response.json())
  //  .then((json) => console.log(json))
  //  .catch((error) => console.error(error))
  //  .finally(() => console.error("error"));

  fetch('http://liwachapi.herokuapp.com/api/item', 
  {  method: 'POST', 
   headers: {   
      Accept: 'application/json',  
        'Content-Type': 'application/json'
        },  body: JSON.stringify({
            "name": "White tshirt",
            "description": "Car is machine used to....",
            "picture": "1626083906_ssh.PNG",
            "swap_type": [
              1,
              3,
              2,
              4
            ],
            "address": {
              "country": "Ethiopia",
              "city": "Addis Ababa",
              "subcity": "Yeka",
              "district": "Summit, 4kilo",
              "landmark": "Firdebet, Next to the parlament, Adwa adebaby",
              "api": "https://google.maps/dhjsdbshf"
            },
            "type_name": "Mobile" 
          
         
          
          })}).then((response) => response.json())
          .then((json) => console.log(json))
          .catch((error) => console.error(`Catch ${error}`)) 
  
};

//Remember Delilah, this needs a token afterwards
export const addItem = (
    picture,
    country,
    city,
    subcity,
    district,
    landmark,
    api,
    type_name,
  )  => {
    
      console.log("I am in")
     
      //const user = getState().auth.user; When I finish authentication
      try {
        console.log("I am in try")
        const response =  (
          fetch(`${API_URL}/item`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              item:{
                "name": "White tshirt",
                "description": "Car is machine used to....",
                "picture": "string",
                "swap_type": [
                  1,
                  3,
                  2,
                  4
                ],
                "address": {
                  "country": "Ethiopia",
                  "city": "Addis Ababa",
                  "subcity": "Yeka",
                  "district": "Summit, 4kilo",
                  "landmark": "Firdebet, Next to the parlament, Adwa adebaby",
                  "api": "https://google.maps/dhjsdbshf"
                },
                "type_name": "Mobile"
              }
             
            }),
          })
        );
        if (!response.ok) {
          
          throw new Error("Something went wrong!");
        }
        const resData = response.json();
        console.log(`${resData}`)
        return resData;
    }

    catch{
      console.log("Didn't work")
    }

  }
  


