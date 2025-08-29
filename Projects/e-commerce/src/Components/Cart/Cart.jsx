import React from 'react'
import "./Cart.css"


const Cart = ({carItems, onRemove}) => {
  return (
    <div className='cart'>
        <h2>🛒 Cart</h2>
    {carItems.length === 0 ? (
        <p>No items in cart</p>
    ):(
        <ul>
            {carItems.map((item, index)=>(
                <li key={index} className='cart-item'>
                    {item.title} - ${item.price}
                    <button className='remove-btn' onClick={()=> onRemove(index)}>❌</button>
                </li>
            ))}
        </ul>
    )}

    </div>
  )
}

export default Cart