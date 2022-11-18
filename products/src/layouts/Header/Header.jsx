import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cartApis from '../../apis/cartApis';
import CartList from '../../component/CartList/CartList';
import Button from '../../component/common/Button/Button';

import './Header.scss'

const Header = props => {

    const [cartData, setCartData] = useState([]);

    const fetchData = async () => {
        const response = await cartApis.getAll();
        setCartData(response.data)
    };

    useEffect(() => {
        fetchData()
    }, [])

    const [show, setShow] = useState(false);
    return (
        <div className='header'>
            <Link to='/products/add'>
                <Button name='Add product' />
            </Link>
            <Link to='/products'>
                <Button name='All product' />
            </Link>
            <p onClick={() => setShow(!show)} className='header-cart'>
                <i className="fa-solid fa-cart-shopping"></i>
                <span>{cartData.length}</span>
            </p>
            {show ? <CartList /> : null}
        </div>
    );
};

export default Header;