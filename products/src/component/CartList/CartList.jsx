import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import cartApis from '../../apis/cartApis';
import CartItem from '../CartItem/CartItem';
import Button from '../common/Button/Button';

import './CartList.scss'

const CartList = props => {
    const [cartData, setCartData] = useState([]);
    const [price, setPrice] = useState(0);
    const [loadData, setLoadData] = useState(true);

    const fetchData = async () => {
        setLoadData(true)
        const response = await cartApis.getAll();
        setCartData(response.data)
    };

    useEffect(() => {
        fetchData()
    }, [loadData])

    const handleDelCartProduct = (productCartId) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, the product will be removed from your cart!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    cartApis.delete(productCartId)
                    setLoadData(false)
                    swal("The product has been removed from your cart!", {
                        icon: "success",
                    });
                }
            });
    }

    const arr = cartData.map((data) => (
        <CartItem
            key={data.id}
            item={data}
            handleDelCartProduct={() => handleDelCartProduct(data.id)}
        />
    ))

    return (
        <>
            {loadData ? <div className='cartlist'>
                <h2 className='cartlist__title'>Your Shopping Cart</h2>
                <hr />
                {arr.length > 0 ? arr : <h2 className='cartlist__empty'>Your cart is empty</h2>}
                <p className='cart__total'>Subtotal: <span>${price}</span></p>
                <div className='cart__btn'>
                    <Link to='/payment'><Button name='Payment' /></Link>
                </div>
            </div> : null}
        </>
    );
};

CartList.propTypes = {

};

export default CartList;