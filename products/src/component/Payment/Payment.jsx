import React from 'react';
import Button from '../common/Button/Button';
import InputText from '../common/InputText/InputText';

import './Payment.scss'

const Payment = () => {
    return (
        <form className='form'>
            <h2 className='form__title'>Payment</h2>
            <div className='form__item'>
                <label className='form__item-label'>Subtotal </label>
                <InputText
                    name='name'
                />
            </div>
            <div className='form__item'>
                <label className='form__item-label'>Add Voucher </label>
                <InputText
                    name='price'
                />
            </div>
            <div className='form__item'>
                <label className='form__item-label'>Total </label>
                <InputText
                    name='image'
                />
            </div>
            <div className='form__item'>
                <Button name='Save' />
                <button className='btn-reset'>Reset</button>
            </div>
        </form>
    );
};

export default Payment;