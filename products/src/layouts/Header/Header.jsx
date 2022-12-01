import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartList from '../../component/CartList/CartList';
import Button from '../../component/common/Button/Button';

import './Header.scss'

const Header = props => {

    const cartData = useSelector(state => state.cart)

    const [show, setShow] = useState(false);

    return (
        <div className='header'>
            <Link to='/products/add'>
                <Button name='Add product' />
            </Link>
            <Link to='/products'>
                <Button name='All product' />
            </Link>
            <p onClick={() => setShow(!show)} className='header-cart' amount={cartData.length}>
                <i className="fa-solid fa-cart-shopping"></i>
            </p>
            {show ? <CartList /> : null}
        </div>
    );
};

export default Header;