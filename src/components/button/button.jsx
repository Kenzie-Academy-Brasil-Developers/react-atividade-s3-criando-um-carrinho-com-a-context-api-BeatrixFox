import { useContext } from "react";

import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";
import { Btn } from "./style";

const Button = ({ type, item }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { catalogue, addToCatalogue, removeToCatalogue } =
    useContext(CatalogueContext);

  const text = type === "catalogue" ? "Add to cart" : "Remove from cart";

  const handlerClick = () => {
    if (type === "catalogue") {
      removeToCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };
  return <Btn onClick={handlerClick}>{text}</Btn>;
};

export default Button;
