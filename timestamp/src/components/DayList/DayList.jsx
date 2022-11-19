import React from 'react';
import { useSelector } from 'react-redux';
import { daySelector } from '../redux/selectors';

import './DayList.scss'

const DayList = props => {
    return (
        <div className='content'>
            <h3>Ngày: 123</h3>
        </div>
    );
};

export default DayList;