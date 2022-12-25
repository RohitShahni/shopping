import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART } from './constant'
export const cartData = (data = [], action) => {


    switch (action.type) {

        case ADD_TO_CART:
            console.log("ADD_TO_CART callled in reducer", action)
            return [action.data, ...data]

        case REMOVE_TO_CART:
            console.log("REMOVE_TO_CART callled in reducer", action)
            data.length = data.length ? data.length - 1 : []
            return [...data]

        case EMPTY_TO_CART:
            console.log("EMPTY_TO_CART callled in reducer", action)
            data = []
            return [...data]

        default:
            return data;

    }
}