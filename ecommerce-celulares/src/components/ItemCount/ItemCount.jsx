import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(quantity);
  };

  return (
    <div className="item-count">
      <div className="quantity-controls">
        <button
          className="quantity-btn"
          onClick={handleDecrease}
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="quantity-display">{quantity}</span>
        <button
          className="quantity-btn"
          onClick={handleIncrease}
          disabled={quantity === stock}
        >
          +
        </button>
      </div>

      <button
        className="add-to-cart-btn"
        onClick={handleOnAdd}
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
};

export default ItemCount;
