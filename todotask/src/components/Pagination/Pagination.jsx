import React from 'react';

import './Pagination.scss'
const Pagination = props => {
    return (
        <div className='pagination'>
            <div className='pagination__page'>{'<'}</div>
            <div className='pagination__page active'>1</div>
            <div className='pagination__page'>2</div>
            <div className='pagination__page'>3</div>
            <div className='pagination__page'>{'>'}</div>

        </div>
    );
};

Pagination.propTypes = {

};

export default Pagination;