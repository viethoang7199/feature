import React from 'react';
import Button from '../../components/common/Button/Button';
import InputTextSearch from '../../components/common/InputTextSearch/InputTextSearch';
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = props => {
    return (
        <div className='header'>
            <Link to='/add-new-task'><Button name='Create New Task' /></Link>
            <InputTextSearch />
        </div>
    );
};

Header.propTypes = {

};

export default Header;