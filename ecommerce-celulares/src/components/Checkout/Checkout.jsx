import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import { createOrder, updateStock } from "../../firebase/services";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotalPrice, clear } = useCart();
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    emailConfirm: "",
  });

  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !buyer.name.trim() ||
      !buyer.phone.trim() ||
      !buyer.email.trim() ||
      !buyer.emailConfirm.trim()
    ) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (buyer.email !== buyer.emailConfirm) {
      setError("El correo no coincide con el mismo.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(buyer.email)) {
      setError("Email inválido.");
      return;
    }

    if (buyer.phone.length < 8) {
      setError("Telefono Inválido.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const orderData = {
        buyer: {
          name: buyer.name.trim(),
          phone: buyer.phone.trim(),
          email: buyer.email.trim(),
        },
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: getTotalPrice(),
      };

      console.log("📝 Datos de la orden:", orderData);

      const id = await createOrder(orderData);

      await updateStock(cart);

      setOrderId(id);
      clear();
    } catch (error) {
      console.error("❌ Error al crear la orden:", error);
      setError(
        "Hubo un error inesperado al procesar tu orden. Por favor, intenta nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0 && !orderId) {
    navigate("/cart");
    return null;
  }

  if (orderId) {
    const copyToClipboard = () => {
      navigator.clipboard
        .writeText(orderId)
        .then(() => {
          const btn = document.getElementById("copy-btn");
          const originalText = btn.textContent;
          btn.textContent = "✅ ¡Copiado!";
          btn.style.background = "#27ae60";

          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = "";
          }, 2000);
        })
        .catch((err) => {
          console.error("Error al copiar:", err);
          alert("No se pudo copiar. ID: " + orderId);
        });
    };

    return (
      <div className="checkout-container">
        <div className="container">
          <div className="order-success">
            <div className="success-icon">✅</div>
            <h2>¡Compra realizada con éxito!</h2>
            <div className="order-id-box">
              <p className="order-id-label">ID de tu orden:</p>
              <p className="order-id-value">{orderId}</p>
              <button
                id="copy-btn"
                className="copy-id-btn"
                onClick={copyToClipboard}
              >
                📋 Copiar ID
              </button>
            </div>
            <p className="success-message">
              Gracias por tu compra, <strong>{buyer.name}</strong>.<br />
              Recibirás un email de confirmación a{" "}
              <strong>{buyer.email}</strong>
            </p>
            <div className="success-actions">
              <button className="back-home-btn" onClick={() => navigate("/")}>
                🏠 Volver al inicio
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="container">
        <h2 className="checkout-title">Finalizar Compra</h2>

        <div className="checkout-content">
          <div className="checkout-form-section">
            <h3>Datos de contacto</h3>
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group">
                <label htmlFor="name">Nombre completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={buyer.name}
                  onChange={handleInputChange}
                  placeholder="Juan Pérez"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={buyer.phone}
                  onChange={handleInputChange}
                  placeholder="+54 11 1234-5678"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={buyer.email}
                  onChange={handleInputChange}
                  placeholder="correo@ejemplo.com"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="emailConfirm">Confirmar Email *</label>
                <input
                  type="email"
                  id="emailConfirm"
                  name="emailConfirm"
                  value={buyer.emailConfirm}
                  onChange={handleInputChange}
                  placeholder="correo@ejemplo.com"
                  disabled={loading}
                />
              </div>

              {error && <div className="error-message">⚠️ {error}</div>}

              <button
                type="submit"
                className="submit-order-btn"
                disabled={loading}
              >
                {loading ? "⏳ Procesando..." : "💳 Confirmar compra"}
              </button>
            </form>
          </div>

          <div className="order-summary-section">
            <h3>Resumen del pedido</h3>
            <div className="summary-items">
              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-info">
                    <span className="summary-item-name">{item.name}</span>
                    <span className="summary-item-qty">x{item.quantity}</span>
                  </div>
                  <span className="summary-item-price">
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="summary-divider"></div>
            <div className="summary-total">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div>
            <div className="summary-note">
              <p>📦 Envío GRATIS</p>
              <p>🔒 Pago seguro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
