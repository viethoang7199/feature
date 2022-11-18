import React from 'react';

import './InputText.scss'

const InputText = props => {
    return (
        <input
            className='input-text'
            type='text'
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    );
};

InputText.propTypes = {

};

export default InputText;