import "./App.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from "./Components/ProductCard/ProductCard";
import SearchBar from "./Components/SearchBar/SearchBar";
import Cart from "./Components/Cart/Cart";

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
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setfilteredProducts(products)
      return;
    }
    const result = products.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setfilteredProducts(result);

  };

  const handleAddToCart = (product) => {
    setcart([...cart, product]);
  }

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setcart(updatedCart);

  }



  return (
    <div className='app'>
      <h1 className='title'>E-Commerce Store</h1>

      <SearchBar onSearch={handleSearch} />
      <Cart carItems={cart} onRemove={handleRemoveFromCart} />


      <div className="product-grid">
        {filteredProducts.map((item) => (
          <ProductCard

            key={item.id}
            product={item}
            onAddToCart={handleAddToCart}

          />
        ))}
      </div>

    </div>
  )
}

export default App