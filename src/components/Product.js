import React from 'react'
import "./Product.css"
import { useStateValue } from '../StateProvider'

export default function Product({ id, title, price, rating, image }) {
    const [{basket}, dispatch] = useStateValue()

    const addToCart =()=>{
         dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                price: price,
                rating: rating,
                image: image,
            },
         })
    }

    return (
        <div className='product' >
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price' >
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map((_,i) => (
                            <p key={i} >⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="image" />
            <div className="buttonDiv">
                <button onClick={addToCart} className='product_button' >Add to cart</button>
            </div>
        </div>
    )
}
