import React from 'react'
import "./ProductCard.css"

const ProductCard = ({product, onAddToCart}) => {
  return (
    <div className='card'>
        <img src={product.image} alt={product.title} className='card-img' />
        <h3 className='card-title'>{product.title}</h3>
        <p className='card-price'>${product.price}</p>
        <button className='btn' onClick={()=> onAddToCart(product)}>Add to Cart</button>

    </div>
  )
}

export default ProductCard