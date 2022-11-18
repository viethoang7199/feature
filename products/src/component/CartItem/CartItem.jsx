import React, { useState } from 'react';

import './CartItem.scss'

const CartItem = ({ item, handleDelCartProduct }) => {
    const { image, name, price } = item

    const [amount, setAmount] = useState(1)

    return (
        <div className='cart'>
            <div className='cart__item'>
                <img className='cart__item-img' src={image} alt='' />
                <h3 className='cart__item-name'>{name}</h3>
                <div className='cart__item-btn'>
                    <button onClick={() => setAmount(amount - 1)}>-</button>
                    <p>{amount}</p>
                    <button onClick={() => setAmount(amount + 1)}>+</button>
                </div>
                <p className='cart__item-price'>${price}</p>
                <button className='cart__item-btndel' onClick={handleDelCartProduct}>X</button>
            </div>
        </div>
    );
};

CartItem.propTypes = {

};

export default CartItem;