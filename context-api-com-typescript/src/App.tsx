import React, { useContext } from "react";
import products from "./components/Products";
import Cart from "./components/Cart";
import CardProcuts from "./components/CardProducts";
import { CartContext } from "./Providers/Cart";
import "./App.css";
function App() {
  const { cart } = useContext(CartContext);
  return (
    <div className="App">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => {
          return <CardProcuts product={product} />;
        })}
      </div>
      <h1>Cart</h1>
      <div className="cart">
        {cart.map((product) => {
          return <Cart product={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
