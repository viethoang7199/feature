import React from 'react';
import Button from '../common/Button/Button';

import './ProductItem.scss'

function ProductItem({ item, handleAddToCart }) {

    const { image, title, price } = item

    return (
        <div className='product__item'>
            <img className='product__item-image' src={image} alt='' />
            <h3 className='product__item-name'>{title}</h3>
            <p className='product__item-price'>${price}</p>
            <div className='product__item-btn'>
                <Button onClick={() => handleAddToCart(item)} name='Add to cart' />
            </div>
        </div>
    );
}

export default ProductItem;