import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Bike.css';

const Bike = (props) => {
    const {bike, handleAddToCart} = props;
    const {name, img, price, ratings, seller} = props.bike;
    return (
        <div className='bike-area'>
            <img src={img} alt="Images" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToCart(bike)} className='btn-cart'> <b> Add To Cart </b> <FontAwesomeIcon icon={faShoppingCart}/> 
            </button>
        </div>
    );
};

export default Bike;