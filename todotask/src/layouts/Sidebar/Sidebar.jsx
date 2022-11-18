import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.scss'

const Sidebar = props => {
    return (
        <div className='sidebar'>
            <div className='sidebar__item'>
                <p><Link style={{ color: 'var(--white-color)', textDecoration: 'none' }} to='/'>All task</Link></p>
            </div>
            <div className='sidebar__item'>
                <p ><Link style={{ color: 'var(--white-color)', textDecoration: 'none' }} to='/new-task'>New task</Link></p>

            </div>
            <div className='sidebar__item'>
                <p><Link style={{ color: 'var(--white-color)', textDecoration: 'none' }} to='/doing-task'>Doing task</Link></p>
            </div>
            <div className='sidebar__item'>
                <p><Link style={{ color: 'var(--white-color)', textDecoration: 'none' }} to='/done-task'>Done task</Link></p>
            </div>
        </div>
    );
};

Sidebar.propTypes = {

};

export default Sidebar;