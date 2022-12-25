import { ADD_TO_CART, REMOVE_TO_CART ,EMPTY_TO_CART} from './constant'

export const addToCart = (data) => {
    console.log("action called ATC");
    console.log("props ", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeToCart = () => {
    console.log("action called RTC");
    console.log("props ");
    return {
        type: REMOVE_TO_CART,
    }
}
export const emptyToCart = () => {
    console.log("action called EMT");
    console.log("props EMpty ");
    return {
        type: EMPTY_TO_CART,
       
    }
}