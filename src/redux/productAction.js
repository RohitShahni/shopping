import { PRODUCT_LIST } from "./constant";

export const productList = async() => {
    let data= await fetch("https://jsonplaceholder.typicode.com/users/1")
    console.log("action called PRODUCT_LIST",data);
    return {
        type: PRODUCT_LIST,
        data: data
    }
}