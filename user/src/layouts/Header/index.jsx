import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss'

const Header = props => {
    return (
        <div className='header'>
            <Link to='/'>
                <Button type="primary" size="large">All User</Button>
            </Link>
            <Link to='/add-user'>
                <Button type="primary" size="large">Add User</Button>
            </Link>
        </div>
    );
};

export default Header;