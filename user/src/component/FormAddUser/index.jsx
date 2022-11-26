import React, { useState } from 'react';

import { Form, Button, Input } from "antd";

import { useDispatch } from 'react-redux';

import './style.scss'
import { UserSlice } from '../User/UserSlice';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';


const FormAddUser = props => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const handleChangeField = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();
    const handleSubmit = () => {
        dispatch(
            UserSlice.actions.addUser({
                id: nanoid(),
                name: inputValue.name,
                email: inputValue.email,
                address: inputValue.address
            })
        )
        navigate('/')
    }



    return (
        <Form

            className='form'
            autoComplete='on'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            onFinish={handleSubmit}
        >
            <Form.Item
                name="name"
                label="Name"
                rules={[
                    {
                        required: true,
                        message: "Please enter your name",
                    },
                    { whitespace: true },
                    { min: 3 },
                ]}
                hasFeedback
            >
                <Input
                    placeholder="Type your name"
                    size="large"
                    name='name'
                    value={inputValue.name}
                    onChange={handleChangeField}
                />
            </Form.Item>

            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                        message: "Please enter your email",
                    },
                    { type: "email", message: "Please enter a valid email" },
                ]}
                hasFeedback
            >
                <Input
                    placeholder="Type your email"
                    size="large"
                    name='email'
                    value={inputValue.email}
                    onChange={handleChangeField} />
            </Form.Item>

            <Form.Item
                name="address"
                label="Address"
                rules={[
                    {
                        required: true,
                        message: "Please enter your address",
                    },
                    { whitespace: true },
                    { min: 3 },
                ]}
                hasFeedback
            >
                <Input
                    placeholder="Type your name"
                    size="large"
                    name='address'
                    value={inputValue.address}
                    onChange={handleChangeField} />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24, offset: 9 }} >
                <Button type="primary" htmlType="submit" size="large">
                    Add User
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormAddUser;