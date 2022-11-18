import React, { useEffect, useState } from 'react';
import InputText from '../common/InputText/InputText';
import Button from '../common/Button/Button';
import InputTextArea from '../common/InputTextArea/InputTextArea';
import { useNavigate, useParams } from 'react-router';
import isEmpty from 'validator/lib/isEmpty';
import { Link } from 'react-router-dom';
import InputRadio from '../common/InputRadio/InputRadio';
import swal from 'sweetalert';
import taskApis from '../../apis/taskApis';

import './UpdateTask.scss'

const UpdateTask = props => {

    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await taskApis.getAll();
        setData(response.data)
    };

    useEffect(() => {
        fetchData()
    }, [])

    const [validationMsg, setValidationMsg] = useState('')
    const validateAll = () => {
        let msg = {}
        if (isEmpty(formValue.title)) {
            msg.title = 'Please fill in this field'
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

    const [formValue, setFormValue] = useState({})

    const { id } = useParams();
    useEffect(() => {
        const taskId = id;
        const selectTask = data.find(task => task.id === taskId)
        setFormValue(selectTask)
    }, [id, data])

    const handleChangeField = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    const navigate = useNavigate()
    const handleUpdate = (e) => {
        e.preventDefault();
        const isValid = validateAll();
        if (!isValid) {
            swal({
                title: "Error!",
                text: "Update Task Fail!",
                icon: "error",
                button: 'Ok',
            });
            return
        }
        taskApis.update(formValue)
        swal({
            title: "Success!",
            text: "Task Updated Successfully!",
            icon: "success",
            button: 'Ok',
        });
        navigate('/')
    }

    return (
        <>
            <h3 className='title'>Update Task</h3>
            <div className='main-update'>
                <form className='form__createtask' onSubmit={handleUpdate}>
                    <div className='form__createtask-item'>
                        <label className='form__createtask-item-label'>Title: </label>
                        <InputText
                            className='input-text'
                            placeholder='Insert a Title'
                            name='title'
                            value={formValue?.title}
                            disabled={true}
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
                            value={formValue?.creator}
                            change={handleChangeField}
                        />
                    </div>
                    <p className='errorMsg'>{validationMsg.creator}</p>
                    <div className='form__createtask-item'>
                        <label className='form__createtask-item-label'>Description: </label>
                        <InputTextArea
                            placeholder='Description Details'
                            name='description'
                            autoFocus={true}
                            value={formValue?.description}
                            change={handleChangeField}

                        />
                    </div>
                    <p className='errorMsg'>{validationMsg.description}</p>
                    <div className='form__createtask-radio'>
                        <InputRadio value='New' change={handleChangeField} /> <span>New</span>
                        <InputRadio value='Doing' change={handleChangeField} /> <span>Doing</span>
                        <InputRadio value='Done' change={handleChangeField} /> <span>Done</span>
                    </div>
                    <div className='form__createtask-btn'>
                        <Button name='Update' />
                        <Link to='/'><Button name='Cancel' /></Link>
                    </div>
                </form>
            </div>
        </>
    );
};

UpdateTask.propTypes = {

};
export default UpdateTask;