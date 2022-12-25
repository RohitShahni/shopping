import React from 'react'
import '../App.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("redux data in header", result)
  return (
    <div className='header'>
      <div className='header-div'>
        <img src='https://www.shutterstock.com/image-vector/vector-shopping-cart-icon-600w-380655559.jpg' />
        <span>{result.length}</span>
      </div>
    </div>
  )
}

export default Header;