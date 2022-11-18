import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import './InputTextSearch.scss'

const InputTextSearch = props => {
    return (
        <>
            <form className='form__search'>
                <input
                    className='form__search-input'
                    type='search'
                    placeholder='Type something to search'
                />
                <Link to='/search'><Button name='Search' /></Link>
            </form>
        </>
    );
};

InputTextSearch.propTypes = {

};

export default InputTextSearch;