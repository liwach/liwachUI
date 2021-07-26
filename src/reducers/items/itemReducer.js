import {
    ADD_ITEM,
    FETCH_ITEMS,
    ITEM_LOADING,
    ITEM_FAILURE,
  } from "./itemActions";
  
  import { createReducer } from "@reduxjs/toolkit";

  const todosReducer = createReducer([], (builder) => {
    builder
      .addCase('ADD_ITEM', (state, action) => {
        // "mutate" the array by calling push()
        state.push(action.payload)
      })
      .addCase('VIEW_ITEM', (state, action) => {
        const todo = state[action.payload.index]
        // "mutate" the object by overwriting a field
        todo.completed = !todo.completed
      })
      .addCase('REMOVE_ITEM', (state, action) => {
        // Can still return an immutably-updated value if we want to
        return state.filter((todo, i) => i !== action.payload.index)
      })
  })
 
  
  // export const itemReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case ITEM_LOADING:
  //       return {
  //         ...state,
  //         isLoading: true,
  //       };
  //     case ITEM_FAILURE:
  //       return {
  //         ...state,
  //         isLoading: false,
  //       };
  //     case FETCH_ITEMS:
  //       return {
  //         ...state,
  //         items: action.items,
  //         isLoading: false,
  //       };
  //     case ADD_ITEM:
  //       console.log("Hi")
  //       const newItem = action.payload;
  //       return {
  //         ...state,
  //         items: state.items.concat(newItem),
  //         isLoading: false,
  //       };

  //     default:
  //         return state;
  //   }
  // };\

  // const initialState = {
  //   items: [],
  //   isLoading: false,
  // };
  // export const itemsReducer = (state = initialState, action) => {
  //   // console.log("in here")
  //   switch (action.type) {
  //     case ITEM_LOADING:
  //       return {
  //         ...state,
  //         isLoading: true,
  //       };
  //     case ITEM_FAILURE:
  //       return {
  //         ...state,
  //         isLoading: false,
  //       };
  //     case FETCH_ITEMS:
        
  //       return {
  //         ...state,
  //         items: [...action.items],
  //         isLoading: false,
  //       };
  //     // case FIRST_OPEN: {
  //     //   return {
  //     //     ...state,
  //     //     isFirstOpen: true,
  //     //   };
  //     // }
  //     default:
  //       return state;
  //   }
  // }

  // export const SelectAllItems = state => state.items
  