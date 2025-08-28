import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [products, setproducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products")
        setproducts(res.data)
        setfilteredProducts(res.data)
      } catch (err) {
        console.log("Error fetching products:", err)
      }
    };
    fetchProducts();
  },[]);

  const handleSearch = (query)=>{
    if(!query){
      setfilteredProducts(products)
      return;
    }
    const result = products.filter((item)=>
    item.title.toLowercase().include(query.toLowercase())
    );
    setfilteredProducts(result);

  };

  const handleAddToCart = (product) =>{
    setcart([...cart, product]);
  }

const handleRemoveFromCart = (index)=>{
  const updatedCart = [...cart];
  updatedCart.splice(index, 1);
  setcart(updatedCart);

}



  return (
    <div className='app'>
      <h1 className='title'>E-Commerce Store</h1>

    </div>
  )
}

export default App