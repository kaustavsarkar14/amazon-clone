import React from 'react'
import { useStateValue } from '../StateProvider'
import CartProduct from './CartProduct';

export default function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div>
            { 
                basket?.length === 0 ? (
                    <h1>Your cart is empty</h1>
                ):(
                    <div>
                    {
                        basket.map(item =>(
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
                )
            }
        </div>
    )
}
