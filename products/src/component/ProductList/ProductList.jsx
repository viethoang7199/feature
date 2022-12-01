import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../redux/cartSlice';

import './ProductList.scss'

const ProductList = props => {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleAddToCart = async (product) => {
        dispatch(
            cartSlice.actions.add(product)
        );
        swal({
            title: "Success!",
            text: "''" + product.title + "'' has been added to your cart!",
            icon: "success",
            button: "OK!",
        });
    }

    const arr = products.map((data) => (
        <ProductItem
            key={data.id}
            item={data}
            handleAddToCart={handleAddToCart}
        />
    ))

    return (
        <div className='product__list'>
            {products.length > 0 ? <p className='product__list-total'>Total: <span>{products.length} products</span></p> : ''}
            <div className='product__list-item'>
                {arr}
            </div>
        </div>
    );
};

ProductList.propTypes = {

};

export default ProductList;