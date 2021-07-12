import { API_URL } from "../../utils/config";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const ITEM_LOADING = "ITEM_LOADING";
export const ITEM_FAILURE = "ITEM_FAILURE";
export const ADD_ITEM = "ADD_ITEM";
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
  ) => async(dispatch, getState) => {
    
      console.log("I am in")
      dispatch({
        type: ITEM_LOADING,
      });
      //const user = getState().auth.user; When I finish authentication
      try {
        const response = await (
          fetch(`${API_URL}/item`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              picture,
              address: {
                country: country,
                city: city,
                subcity: subcity,
                district : district,
                landmark : landmark,
                api : api,
              },
              type_name : type_name,
            }),
          })
        );
        if (!response.ok) {
          dispatch({
            type: ITEM_FAILURE,
          });
          throw new Error("Something went wrong!");
        }
        const resData = await response.json();
        dispatch({
          type: ADD_ITEM,
          payload:resData.content,
        });
      } catch (err) {
        throw error;
      }
      return dispatch;
    };
  

