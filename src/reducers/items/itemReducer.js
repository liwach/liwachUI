import {
    ADD_ITEM,
    FETCH_ITEMS,
    ITEM_LOADING,
    ITEM_FAILURE,
  } from "./itemActions";
  
  const initialState = {
    items: [],
    isLoading: false,
  };
  
  export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case ITEM_LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case ITEM_FAILURE:
        return {
          ...state,
          isLoading: false,
        };
      case FETCH_ITEMS:
        return {
          ...state,
          items: action.items,
          isLoading: false,
        };
      case ADD_ITEM:
        console.log("Hi")
        const newItem = action.payload;
        return {
          ...state,
          items: state.items.concat(newItem),
          isLoading: false,
        };

      default:
          return state;
    }
  };