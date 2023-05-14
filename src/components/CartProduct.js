import React from 'react'
import "./CartProduct.css"
import { useStateValue } from '../StateProvider'

export default function CartProduct({ id, title, price, rating, image }) {
    const [{basket},dispatch] = useStateValue()

    const removeFromCart =()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id : id,
        })
    }

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_imageDiv">
            <img className='checkoutProduct_image' src={image} alt="" />
            </div>
            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title' >{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((_, i) => (<p key={i} >⭐</p>))}
                </div>

                <button onClick={removeFromCart} >Remove item from cart</button>
            </div>
        </div>
    )
}
