import React, { useEffect, useState } from 'react';
import './Shop.css';
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [bikes, setBikes] = useState([]);
    const [cart, setCart] = useState([]);

    console.log(cart);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    const handleAddToCart = (bike) =>{
        console.log(bike);
        const newCart = [...cart, bike];
        setCart(newCart);
    }

    const math = (cart) => 
    {
        const result = Math.floor(Math.random()*cart.length)
        console.log(cart[result]);
        document.getElementById('choosen').innerText = cart[result].name;
    }

   

    return (
            <div className='shop-container'>
                <div className="product-container">
                    {
                        bikes.map(bike => <Bike 
                            key={bike.id}
                            bike={bike}
                            handleAddToCart={handleAddToCart}
                            >

                            </Bike>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} math={math}></Cart>
                </div>
            </div>
    );
};

export default Shop; 
        
        