import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productRaducer";



export default combineReducers(
    { cartData, productData }
)