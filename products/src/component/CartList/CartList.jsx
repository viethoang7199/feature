import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import CartItem from '../CartItem/CartItem';
import Button from '../common/Button/Button';
import { cartSlice } from '../../redux/cartSlice'

import './CartList.scss'

const CartList = props => {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    const handleDelCartProduct = (productId) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, the product will be removed from your cart!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(
                        cartSlice.actions.remove(productId)
                    );
                    swal("The product has been removed from your cart!", {
                        icon: "success",
                    });
                }
            });
    }

    const arr = products.map((data) => (
        <CartItem
            key={data.id}
            item={data}
            handleDelCartProduct={() => handleDelCartProduct(data.id)}
        />
    ))

    return (
        <>
            <div className='cartlist'>
                <h2 className='cartlist__title'>Your Shopping Cart</h2>
                <hr />
                {arr.length > 0 ? arr : <h2 className='cartlist__empty'>Your cart is empty</h2>}
                <p className='cart__total'>Subtotal: <span>$0</span></p>
                <div className='cart__btn'>
                    <Link to='/payment'><Button name='Payment' /></Link>
                </div>
            </div>
        </>
    );
};

CartList.propTypes = {

};

export default CartList;