import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from '../../component/ProductList/ProductList';
import FormCreateProduct from '../../component/FormCreateProduct/FormCreateProduct';
import NotFound from '../../component/NotFound/NotFound';

import './MainContent.scss'
import Payment from '../../component/Payment/Payment';

const MainContent = props => {
    return (
        <div className='maincontent'>
            <Routes>
                <Route path='/products' element={<ProductList />} />
                <Route path='/products/add' element={<FormCreateProduct />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

MainContent.propTypes = {

};

export default MainContent;