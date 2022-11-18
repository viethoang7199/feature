import React from 'react';

import './Button.scss'

const Button = props => {
    return (
        <button
            className='btn'
            onClick={props.click}
        >{props.name}</button>
    );
};

Button.propTypes = {

};

export default Button;