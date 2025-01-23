import React, { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import "./styles/App.css";


function App() {
  const [products] = useState([
    { id: 1, name: "Lamboghini", price: 200000 },
    { id: 2, name: "Bugatti", price: 400000 },
    { id: 3, name: "Tesla", price: 60000},
    { id: 4, name: "Ferrari", price: 150000 },
    { id: 5, name: "Range Rover", price: 50000 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <h1>SIXDOLLA.IO</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} />
    </div>
  );
}

export default App;
