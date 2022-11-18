import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import InputText from '../common/InputText/InputText';
import { v4 as uuidv4 } from 'uuid'
import productApis from '../../apis/productApis';
import swal from 'sweetalert';
import isEmpty from 'validator/lib/isEmpty';
import isNumeric from 'validator/lib/isNumeric';

import './FormCreateProduct.scss'

const FormCreateProduct = props => {

    const [formValue, setFormValue] = useState({
        id: uuidv4(),
        name: '',
        price: '',
        image: '',
    });

    const [validationMsg, setValidationMsg] = useState('')
    const validateAll = () => {
        let msg = {}
        if (isEmpty(formValue.name)) {
            msg.name = 'Name is required!'
        }
        if (!isNumeric(formValue.price)) {
            msg.price = 'Only number!'
        }
        if (isEmpty(formValue.price)) {
            msg.price = 'Price is required!'
        }

        if (isEmpty(formValue.image)) {
            msg.image = 'Image is required!'
        }
        setValidationMsg(msg)

        if (Object.keys(msg).length > 0) {
            return false
        } else {
            return true
        }
    }

    const navigate = useNavigate()

    const handleSave = async (e) => {
        e.preventDefault();
        const isValid = validateAll();
        if (!isValid) {
            swal({
                title: "Error!",
                text: "Add Task Fail!",
                icon: "error",
                button: 'Ok',
            });
            return
        }

        await productApis.add(formValue);
        swal({
            title: "Success!",
            text: "Product Added Successfully!",
            icon: "success",
            button: "OK!",
        });
        setFormValue(formValue);
        navigate('/products')
    };

    const handleChangeField = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = (e) => {
        e.preventDefault()
        formValue.name = '';
        formValue.price = '';
        formValue.image = '';
    }

    return (
        <form className='form'>
            <h2 className='form__title'>Add new product</h2>
            <div className='form__item'>
                <label className='form__item-label'>Name: </label>
                <InputText
                    name='name'
                    value={formValue.name}
                    onChange={handleChangeField}
                />
            </div>

            <p className='errorMsg'>{validationMsg.name}</p>
            <div className='form__item'>
                <label className='form__item-label'>Price: </label>
                <InputText
                    name='price'
                    value={formValue.price}
                    onChange={handleChangeField}
                />
            </div>
            <p className='errorMsg'>{validationMsg.price}</p>
            <div className='form__item'>
                <label className='form__item-label'>Image: </label>
                <InputText
                    name='image'
                    value={formValue.image}
                    onChange={handleChangeField}
                />
            </div>
            <p className='errorMsg'>{validationMsg.image}</p>
            <div className='form__item'>
                <Button name='Save' onClick={handleSave} />
                <button onClick={handleReset} className='btn-reset'>Reset</button>
            </div>
        </form>
    );
};

FormCreateProduct.propTypes = {

};

export default FormCreateProduct;