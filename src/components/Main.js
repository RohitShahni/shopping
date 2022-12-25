
import React from 'react';
import { addToCart, removeToCart, emptyToCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import '../App.css';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';


function Main() {
    const data = useSelector((state) => state.cartData)

    console.log("data in main======", data)

    const dispatch = useDispatch();
    const product = {
        name: 'Iphone',
        price: '10000',
        type: 'mobile',
        color: 'red'
    }

    return (
        <div className='container'>
            <button onClick={() => { dispatch(addToCart(product)) }}>
                ADD_TO_CART
            </button>

            <button onClick={() => { dispatch(removeToCart()) }}>
                REMOVE_TO_CART
            </button>

            <button onClick={() => { dispatch(emptyToCart()) }}>
                EMPTY_TO_CART
            </button>

            <button onClick={() => { dispatch(productList()) }}>
                GET_TO_DATA
            </button>



        </div>
    );
}

export default Main;
