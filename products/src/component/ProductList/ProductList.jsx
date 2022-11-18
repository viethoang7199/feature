import React, { useEffect, useState } from 'react';
import cartApis from '../../apis/cartApis';
import productApis from '../../apis/productApis';
import NotFound from '../NotFound/NotFound';
import ProductItem from '../ProductItem/ProductItem';
import swal from 'sweetalert';

import './ProductList.scss'

const ProductList = props => {

    const [productData, setProductData] = useState([]);

    const fetchData = async () => {
        const response = await productApis.getAll();
        setProductData(response.data)
    };

    useEffect(() => {
        fetchData()
    }, [])

    const handleAddToCart = async (item) => {
        await cartApis.add(item)
        swal({
            title: "Success!",
            text: "''" + item.name + "'' has been added to your cart!",
            icon: "success",
            button: "OK!",
        });
    }

    const arr = productData.map((data) => (
        <ProductItem
            key={data.id}
            item={data}
            handleAddToCart={handleAddToCart}
        />
    ))

    return (
        <div className='product__list'>
            {productData.length > 0 ? <p className='product__list-total'>Total: <span>{productData.length} products</span></p> : ''}
            <div className='product__list-item'>
                {arr.length > 0 ? arr : <div className='notfound'>
                    <NotFound />
                </div>}
            </div>
        </div>
    );
};

ProductList.propTypes = {

};

export default ProductList;