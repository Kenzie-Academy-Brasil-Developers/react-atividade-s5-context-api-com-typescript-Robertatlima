import React, { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import "./style.css";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductType {
  product: Product;
}

const CardProcuts = ({ product }: ProductType) => {
  const { addProduct } = useContext(CartContext);
  return (
    <div className="listProducts">
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button onClick={() => addProduct(product)}>ADICIONAR AO CARRINHO</button>
    </div>
  );
};
export default CardProcuts;
