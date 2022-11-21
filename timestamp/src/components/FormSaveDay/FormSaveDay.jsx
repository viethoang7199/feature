import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addDay } from '../redux/actions';
import isEmpty from 'validator/lib/isEmpty';
import isLength from 'validator/lib/isLength';
import './FormSaveDay.scss'

const FormSaveDay = props => {

    const [form, setForm] = useState({
        id: nanoid(),
        content: '',
        day: ''
    })

    const dispatch = useDispatch();

    const [validationMsg, setValidationMsg] = useState('')
    const validateAll = () => {
        let msg = {};
        if (!isLength(form.content, { min: 5, max: 80 })) {
            msg.content = 'Nội dung phải dài hơn 5 và nhỏ hơn 80 ký tự'
        }
        if (isEmpty(form.content)) {
            msg.content = 'Bạn chưa nhập Nội dung'
        }
        if (isEmpty(form.day)) {
            msg.day = 'Bạn chưa chọn Ngày nhắc'
        }
        setValidationMsg(msg)

        if (Object.keys(msg).length > 0) {
            return false
        } else {
            return true
        }
    }
    const handleSubmit = () => {
        const isValid = validateAll();
        if (!isValid) {
            return
        }
        dispatch(
            addDay({
                id: nanoid(),
                content: form.content,
                day: form.day
            })
        )
        setForm('')
    }

    const handleChangeFields = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setForm({
            ...form,
            [name]: value,
        })
    }

    return (
        <Container>
            <Col xl={10}>
                <form className='form'>
                    <div className='form-item'>
                        <Row>
                            <Col xl={3}><label>Nội dung</label></Col>
                            <Col xl={9}>
                                <input
                                    type='text'
                                    placeholder='Nhập nội dung của ngày'
                                    autoFocus={true}
                                    name='content'
                                    value={form.content || ''}
                                    onChange={handleChangeFields}
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className='form-item'>
                        <Row>
                            <Col xl={3}><label>Ngày nhắc</label></Col>
                            <Col xl={5}>
                                <input
                                    type='date'
                                    name='day'
                                    value={form.day || ''}
                                    onChange={handleChangeFields}
                                />
                            </Col>
                            <Col xl={4}><Button onClick={handleSubmit}>Lưu ngày</Button></Col>
                        </Row>
                    </div>
                    <p className='errorMsg'>{validationMsg.content}</p>
                    <p className='errorMsg'>{validationMsg.day}</p>
                </form>
            </Col>
        </Container>
    );
};

export default FormSaveDay;