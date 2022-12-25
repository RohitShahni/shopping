import { PRODUCT_LIST } from './constant'
export const productData = (data = [], action) => {


    switch (action.type) {

        case PRODUCT_LIST:
            console.log("ADD_TO_CART callled in reducer", action)
            return [data]


        default:
            return data;

    }
}