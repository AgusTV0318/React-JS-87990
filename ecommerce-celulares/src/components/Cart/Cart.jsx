import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear, getTotalPrice } = useCart();

  const handleCheckout = () => {
    alert(
      `Compra realizada!\nTotal: $${getTotalPrice()}\nProductos: ${cart.length}`
    );
    clear();
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Tu carrito está vacío</h2>
            <p>¡Agrega productos para comenzar a comprar!</p>
            <Link to="/" className="continue-shopping-btn">
              Ver productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="container">
        <h2 className="cart-title">Mi Carrito</h2>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-brand">{item.brand}</p>
                </div>

                <div className="cart-item-quantity">
                  <p className="quantity-label">Cantidad:</p>
                  <p className="quantity-value">{item.quantity}</p>
                </div>

                <div className="cart-item-price">
                  <p className="price-label">Precio unitario:</p>
                  <p className="price-value">${item.price}</p>
                </div>

                <div className="cart-item-subtotal">
                  <p className="subtotal-label">Subtotal:</p>
                  <p className="subtotal-value">
                    ${item.price * item.quantity}
                  </p>
                </div>

                <button
                  className="remove-item-btn"
                  onClick={() => removeItem(item.id)}
                  title="Eliminar producto"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Resumen de compra</h3>

            <div className="summary-item">
              <span>Productos ({cart.length}):</span>
              <span>${getTotalPrice()}</span>
            </div>

            <div className="summary-item">
              <span>Envío:</span>
              <span className="free-shipping">GRATIS</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Finalizar compra
            </button>

            <button className="clear-cart-btn" onClick={clear}>
              Vaciar carrito
            </button>

            <Link to="/" className="keep-shopping-link">
              ← Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
