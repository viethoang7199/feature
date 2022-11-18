import React from 'react';
import './InputTextArea.scss';

const InputTextArea = props => {
    return (
        <textarea
            className='input-textarea'
            type='textarea'
            rows='2'
            placeholder={props.placeholder}
            autoFocus={props.autoFocus}
            value={props.value}
            name={props.name}
            onChange={props.change}
        />
    );
};

InputTextArea.propTypes = {

};

export default InputTextArea;