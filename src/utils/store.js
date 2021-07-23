import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import  {itemsReducer}  from '../reducers/items/itemReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = () => combineReducers({
            itemsReducer,
            
        }); 


export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));