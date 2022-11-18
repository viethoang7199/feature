import React from 'react';

import './InputRadio.scss'

const InputRadio = props => {
    return (
        <input
            className='input-radio'
            type='radio'
            name='status'
            value={props.value}
            onChange={props.change}
            checked={props.checked}
        />
    );
};

InputRadio.propTypes = {

};

export default InputRadio;