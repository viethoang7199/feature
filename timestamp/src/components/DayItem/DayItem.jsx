import React from 'react';

import './DayItem.scss';

const DayItem = ({ item }) => {
    const { day, content } = item
    return (
        <div className='item'>
            <h3 className='item-day'>Ngày: {day}</h3>
            <p className='item-content'>- {content}</p>
            <button className='item-btn'>X</button>
        </div>
    );
};

export default DayItem;