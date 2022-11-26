import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Table } from 'antd';

import './style.scss'
import UserItem from '../UserItem';

const UserList = props => {
    const userList = useSelector(state => state.userList)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            align: 'center',
            key: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            align: 'center',
            key: 'email'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            align: 'center',
            key: 'address'
        },
        {
            title: 'Action',
            dataIndex: 'action',
            align: 'center',
            key: 'action',
            render: action =>
                <>
                    <Button type='primary'>Edit</Button> {''}
                    <Button type='primary' danger >Delete</Button>
                </>
        }
    ]


    return (
        <div className='table'>
            <Table
                columns={columns}
                dataSource={userList}
                pagination={{ position: ['bottomCenter'] }}
            />
        </div>
    );
};

UserList.propTypes = {
};

export default UserList;