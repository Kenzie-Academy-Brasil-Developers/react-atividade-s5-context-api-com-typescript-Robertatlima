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

const Cart = ({ product }: ProductType) => {
  const { deleteProduct } = useContext(CartContext);
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button className="buttonDelete" onClick={() => deleteProduct(product)}>
        REMOVER DO CARRINHO
      </button>
    </div>
  );
};
export default Cart;
