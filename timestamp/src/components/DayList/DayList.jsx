import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DayItem from '../DayItem/DayItem';
import { delDay } from '../redux/actions';
import { daySelector } from '../redux/selectors';

import './DayList.scss'

const DayList = props => {
    const dayList = useSelector(daySelector)

    const dispatch = useDispatch()

    const arr = dayList.map(data => (
        <DayItem
            key={data.id}
            item={data}
            onHandleDelete={() => handleDelete(data.id)}
        />
    ))

    const handleDelete = (id) => {
        dispatch(
            delDay(
                dayList.splice(id, 1)
            )
        )
    }
    return (
        <div className='content'>
            {arr.length > 0 ? arr : <p className='text-empty'>Data is empty</p>}
        </div>
    );
};

export default DayList;