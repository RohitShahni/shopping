import React from 'react';
import './Card.css';



const Card = (props) => {
    console.log("props in card js ", props)
    // const {
    //     color='x',
    //     name='apple',
    //     price='500',
    //     type='ipad',
    // } = props

    const {
        color,
        name,
        price,
        type
    } = props

    return (
        <div className='mainMontainer'>
            <div className='containerx'>
                <text>{name}</text>
                <text>{price}</text>
                <text>{type}</text>
                <text>{color}</text>
            </div>
        </div>
    )
}

export default Card;
