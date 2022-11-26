import React from 'react';

const UserItem = props => {
    const { name, email, address } = props.user
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{address}</h1>
        </div>
    );
};


export default UserItem;