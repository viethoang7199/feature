import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counter from '../../components/counter';
import Music from '../../components/music';

import './style.scss'

const Main = props => {
    return (
        <div className='main'>
            <Routes>
                <Route path="/counter" element={<Counter />} />
                <Route path="/music" element={<Music />} />
            </Routes>
        </div>
    );
};

Main.propTypes = {

};

export default Main;