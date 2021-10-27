import { ReactNode } from "react";
import { CartProvider } from "./Cart";

interface CartProps {
  children: ReactNode;
}

const Providers = ({ children }: CartProps) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
