import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from '../redux/itemSlice'

export default configureStore({
    reducer: {
      items: itemsReducer,
      
    },
  })