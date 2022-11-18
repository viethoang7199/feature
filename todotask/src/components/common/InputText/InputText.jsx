import React from 'react';

import './InputText.scss'

const InputText = props => {
    return (
        <input
            className={props.className}
            type='text'
            disabled={props.disabled}
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            autoFocus={props.autoFocus}
            onChange={props.change} />
    );
};

InputText.propTypes = {

};

export default InputText;