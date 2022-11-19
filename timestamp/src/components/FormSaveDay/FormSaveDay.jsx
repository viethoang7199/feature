import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addDay } from '../redux/actions';

import './FormSaveDay.scss'

const FormSaveDay = props => {

    const [form, setForm] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = () => {
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
                            <Col xl={4}><label>Nội dung</label></Col>
                            <Col xl={8}>
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
                    <Col className='form-item'>
                        <Row>
                            <Col xl={4}><label>Ngày nhắc</label></Col>
                            <Col xl={4}>
                                <input
                                    type='text'
                                    placeholder='DD/MM/YYYY'
                                    name='day'
                                    value={form.day || ''}
                                    onChange={handleChangeFields}
                                />
                            </Col>
                            <Col xl={4}><Button onClick={handleSubmit}>Lưu ngày</Button></Col>
                        </Row>
                        {/* <Col><input type='date' /></Col>
                            <Button className='btn'>Lưu ngày</Button> */}
                    </Col>
                </form>
            </Col>
        </Container>
    );
};

export default FormSaveDay;