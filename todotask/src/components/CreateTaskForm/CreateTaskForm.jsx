import React, { useEffect, useState } from 'react';
import InputText from '../common/InputText/InputText';
import Button from '../common/Button/Button';
import InputTextArea from '../common/InputTextArea/InputTextArea';
import { v4 as uuidv4 } from 'uuid';
import isEmpty from 'validator/lib/isEmpty';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
import InputRadio from '../common/InputRadio/InputRadio';
import taskApis from '../../apis/taskApis';

import './CreateTaskForm.scss';

const CreateTaskForm = props => {

    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await taskApis.getAll();
        setData(response.data)
    };

    useEffect(() => {
        fetchData()
    }, [])


    const [formValue, setFormValue] = useState({
        id: uuidv4(),
        title: '',
        creator: '',
        status: 'New',
        description: ''
    })

    const [validationMsg, setValidationMsg] = useState('')
    const validateAll = () => {

        let check = checkExist()
        let msg = {}
        if (isEmpty(formValue.title)) {
            msg.title = 'Please fill in this field'
        }
        if (check === true) {
            msg.title = 'Title is already exist'
        }
        if (isEmpty(formValue.creator)) {
            msg.creator = 'Please fill in this field'
        }
        if (isEmpty(formValue.description)) {
            msg.description = 'Please fill in this field'
        }
        setValidationMsg(msg)

        if (Object.keys(msg).length > 0) {
            return false
        } else {
            return true
        }
    }
    const checkExist = () => {
        let dataTitle = data.map(dataTitle => dataTitle.title)
        if (dataTitle.includes(formValue.title)) {
            return true
        }
    }

    const navigate = useNavigate()
    const handleSubmit = (e) => {
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
        taskApis.add(formValue)
        swal({
            title: "Success!",
            text: "Task Added Successfully! \n \n Title: " + formValue.title + " \n Creator: " + formValue.creator + "",
            icon: "success",
            button: 'OK',
        });
        navigate('/')
    }

    const handleChangeField = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    return (
        <>
            <h3 className='title'>Create New Task</h3>
            <form className='form__createtask' onSubmit={handleSubmit}>
                <div className='form__createtask-item'>
                    <label className='form__createtask-item-label'>Title: </label>
                    <InputText
                        className='input-text'
                        placeholder='Insert a Title'
                        name='title'
                        autoFocus={true}
                        value={formValue.title}
                        change={handleChangeField}
                    />
                </div>
                <p className='errorMsg'>{validationMsg.title}</p>
                <div className='form__createtask-item'>
                    <label className='form__createtask-item-label'>Creator: </label>
                    <InputText
                        className='input-text'
                        placeholder='Name of Creator'
                        name='creator'
                        value={formValue.creator}
                        change={handleChangeField} />
                </div>

                <p className='errorMsg'>{validationMsg.creator}</p>
                <div className='form__createtask-item'>
                    <label className='form__createtask-item-label'>Description: </label>
                    <InputTextArea
                        placeholder='Description Details'
                        name='description'
                        value={formValue.description}
                        change={handleChangeField} />
                </div>
                <p className='errorMsg'>{validationMsg.description}</p>
                <div className='form__createtask-radio'>
                    <InputRadio value='New' change={handleChangeField} /> <span>New</span>
                    <InputRadio value='Doing' change={handleChangeField} /> <span>Doing</span>
                    <InputRadio value='Done' change={handleChangeField} /> <span>Done</span>
                </div>
                <div className='form__createtask-btn'>
                    <Button name='Save' />
                    <Link to='/'><Button name='Cancel' /></Link>
                </div>
            </form>
        </>
    );
};

CreateTaskForm.propTypes = {

};

export default CreateTaskForm;