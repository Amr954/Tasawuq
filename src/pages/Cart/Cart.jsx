import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import { FaTrashAlt } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import './cart.css'
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';
function Cart() {
    const { cartitems, increaseqty, decreaseqty, removefromCart } = useContext(CartContext)

    const total = (cartitems.reduce((acc, item) => acc + item.price * item.quantity, 0))

    return (
        <PageTransition>
            <div className='checkout'>
                <div className="order-summary">
                    <h1>Order Summary</h1>

                    <div className="items">
                        {cartitems.length === 0 ? (
                            <div className='empty-cart'>
                                <p className='p1'>Your Cart Is Empty!</p>
                                <Link to="/">
                                    <button className='add-btn'><FaLongArrowAltLeft /> Continue Shopping</button>
                                </Link>
                            </div>
                        ) : (
                            cartitems.map((item, index) => (

                                <div className="item-cart" key={index}>
                                    <div className="image-name">
                                        <div className="img-item">
                                            <img src={item.images[0]} alt={item.title} />
                                        </div>

                                        <div className="content">
                                            <h4>{item.title}</h4>
                                            <p className='price-item'>$ {item.price}</p>

                                            <div className="qty-control">
                                                <button onClick={() => decreaseqty(item.id)}>-</button>
                                                <span className="qty">{item.quantity}</span>
                                                <button onClick={() => increaseqty(item.id)}>+</button>
                                            </div>
                                        </div>

                                    </div>
                                    <button className="delete-item" onClick={() => removefromCart(item.id)}><FaTrashAlt /></button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="bottom-summary">
                        <div className="shop-table">
                            <p>Total:</p>
                            <span className='total-checkout'>${total.toFixed(2)}</span>
                        </div>

                        <div className="btn-div">
                            <button type='submit'>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default Cart