import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormAddUser from '../../component/FormAddUser';
import UserList from '../../component/User';

const Main = props => {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<UserList />} />
                <Route path="/add-user" element={<FormAddUser />} />
            </Route>
        </Routes>
    );
};


export default Main;