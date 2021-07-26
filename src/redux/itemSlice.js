import { createAsyncThunk,createEntityAdapter, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";
import { API_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { normalize, schema } from 'normalizr'

const itemsAdapter = createEntityAdapter()
const initialState = itemsAdapter.getInitialState()
//const itemEntity = new schema.Entity('items')

export const getItems = createAsyncThunk( 
    'items/getItems',  
    async (_, thunkAPI) => { 
       const dispatch = useDispatch()
       try {
           const res = await axios.get(`${API_URL}/item`);
           console.log(`getItems: ${res.data.data}`)
            return res.data.data
          
       } catch (e) {
           return console.error(e.message);
       }
})

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    
  },

  extraReducers: {
    [getItems.fulfilled]: itemsAdapter.setAll,
  },
   
})
export default itemSlice.reducer;

export const {
    selectAll: selectAllItems,
    selectById: selectItemById,
  } = itemsAdapter.getSelectors((state) => state.items)



// Action

// export const getItems = () => async dispatch => {
//     try {
//         const res = await axios.get(`${API_URL}/item`);
//         if (res.data) {
//             dispatch(getAllItems(res.data.data));
//         } 
//         else {
//           console.log('Unable to fetch');
//         } 
//     } catch (e) {
//         return console.error(e.message);
//     }
// }

