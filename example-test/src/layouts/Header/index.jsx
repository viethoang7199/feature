import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

const Header = props => {
    return (
        <div className='header'>
            <Link to='/counter' className='header__link'>Counter</Link>
            <Link to='/music' className='header__link'>Music</Link>
        </div>
    );
};

export default Header;