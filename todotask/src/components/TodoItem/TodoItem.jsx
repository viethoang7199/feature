import React from 'react';

import './TodoItem.scss'

const TodoItem = props => {

    const { title, creator, status, description } = props.todo
    const { handleDelete, handleEdit } = props

    const colorStatus = [];
    if (status === "New") {
        colorStatus.push('new')
    }
    if (status === "Doing") {
        colorStatus.push('doing')
    }
    if (status === "Done") {
        colorStatus.push('done')
    }

    return (
        <div className='card'>
            <p className='card__title'>Title: {title}</p>
            <p className='card__creator'>Creator: {creator}</p>
            <p className={`card__status ${colorStatus}`}>{'Status: ' + status} </p>
            <hr className='card__line' />
            <p className='card__desc'>Description: </p>
            <p className='card__descinfo'>{description}</p>
            <div className='card__btn'>
                <button className='card__btn-edit' onClick={handleEdit}>Edit</button>
                <button className='card__btn-delete' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

TodoItem.propTypes = {

};

export default TodoItem;