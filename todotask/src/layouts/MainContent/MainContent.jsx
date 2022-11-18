import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import taskApis from '../../apis/taskApis';
import CreateTaskForm from '../../components/CreateTaskForm/CreateTaskForm';
import NotFound from '../../components/NotFound/NotFound';
import TodoItem from '../../components/TodoItem/TodoItem';
import TodoList from '../../components/TodoList/TodoList';
import UpdateTask from '../../components/UpdateTask/UpdateTask';

import './MainContent.scss'

const MainContent = props => {

    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await taskApis.getAll();
        setData(response.data)
    };

    useEffect(() => {
        fetchData()
    }, [])

    const navigate = useNavigate()
    const handleEdit = (id) => {
        navigate(`/update-task/${id}`);
    }

    const handleDelete = (todoId) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const response = taskApis.delete(todoId);
                    console.log(response);
                    swal("Task Deleted successfully!", {
                        icon: "success",
                    });
                }
            });
    }

    const statusNew = data.filter(item => item.status === 'New')
    const statusDoing = data.filter(item => item.status === 'Doing')
    const statusDone = data.filter(item => item.status === 'Done')

    const newStatus = statusNew.map((data) => (
        <TodoItem
            key={data.id}
            todo={data}
            handleEdit={() => handleEdit(data.id)}
            handleDelete={() => handleDelete(data.id)}
        />
    ))
    const doingStatus = statusDoing.map((data) => (
        <TodoItem
            key={data.id}
            todo={data}
            handleEdit={() => handleEdit(data.id)}
            handleDelete={() => handleDelete(data.id)}
        />
    ))
    const doneStatus = statusDone.map((data) => (
        <TodoItem
            key={data.id}
            todo={data}
            handleEdit={() => handleEdit(data.id)}
            handleDelete={() => handleDelete(data.id)}
        />
    ))

    return (
        <div className='maincontent'>
            <Routes >
                <Route path="/" element={<TodoList />} />
                <Route path="/add-new-task" element={<CreateTaskForm />} />
                <Route path="/update-task/:id" element={<UpdateTask />} />
                <Route path="/new-task" element={
                    <div className='todolist'>
                        {newStatus.length > 0 ? newStatus : <div className='todolist__notfound'>
                            <NotFound />
                        </div>}
                    </div>
                } />
                <Route path="/doing-task" element={
                    <div className='todolist'>
                        {doingStatus.length > 0 ? doingStatus : <div className='todolist__notfound'>
                            <NotFound />
                        </div>}
                    </div>
                } />
                <Route path="/done-task" element={
                    <div className='todolist'>
                        {doneStatus.length > 0 ? doneStatus : <div className='todolist__notfound'>
                            <NotFound />
                        </div>}
                    </div>
                } />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

MainContent.propTypes = {

};

export default MainContent;