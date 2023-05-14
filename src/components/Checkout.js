import React from 'react'
import { useStateValue } from '../StateProvider'
import CartProduct from './CartProduct';
import "./Checkout.css"
import Subtotal from './Subtotal';
import { Link } from 'react-router-dom';

export default function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div>
            {
                basket?.length === 0 ? (
                    <div className="checkout_empty">
                        <h2>Your Amazon cart is empty</h2>
                        <p>Check your Saved for later items below or <Link className='Link' to="/">continue shopping</Link>.</p>
                    </div>
                ) : (
                    <div className='checkout' >
                        <div className="checkout_left">
                            {
                                basket.map(item => (
                                    <CartProduct key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}
                                        image={item.image}
                                    />
                                ))
                            }
                        </div>

                        <div className="checkout_right">
                            <Subtotal />
                        </div>

                    </div>
                )
            }
        </div>
    )
}
