import React, { useState, useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import NotFound from '../NotFound/NotFound';
import taskApis from '../../apis/taskApis';

import './TodoList.scss'

const TodoList = props => {
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

    const arr = data.map((data) => (
        <TodoItem
            key={data.id}
            todo={data}
            handleEdit={() => handleEdit(data.id)}
            handleDelete={() => handleDelete(data.id)}
        />
    ))

    return (
        <div className='todolist'>
            {arr.length > 0 ? arr : <div className='todolist__notfound'>
                <NotFound />
            </div>}
        </div>
    );
};

TodoList.propTypes = {

};

export default TodoList;