import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from './counterSlice';

import './style.scss'

const Counter = props => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const handleIncrease = () => {
        dispatch(
            counterSlice.actions.increase()
        )
    }
    const handleDecrease = () => {
        dispatch(
            counterSlice.actions.decrease()
        )
    }
    const handleReset = () => {
        dispatch(
            counterSlice.actions.reset()
        )
    }
    return (
        <div className='counter'>
            <h1 className='counter__number'>{counter}</h1>
            <button className='counter__btn inc' onClick={handleIncrease}>+</button>
            <button className='counter__btn reset' onClick={handleReset}>
                <i class="fa-solid fa-rotate-left"></i>
            </button>
            <button className='counter__btn dec' onClick={handleDecrease}>-</button>
        </div>
    );
};

Counter.propTypes = {

};

export default Counter;