import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    console.log(
      `Agregado al carrito: ${quantity} unidad(es) de ${product.name}`
    );
  };

  return (
    <div className="item-detail">
      <div className="item-detail-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="item-detail-image"
        />
      </div>

      <div className="item-detail-info">
        <p className="item-detail-brand">{product.brand}</p>
        <h1 className="item-detail-name">{product.name}</h1>

        <p className="item-detail-price">${product.price}</p>

        <div className="item-detail-stock">
          {product.stock > 0 ? (
            <span className="stock-available">
              ✓ Stock disponible: {product.stock} unidades
            </span>
          ) : (
            <span className="stock-unavailable">✗ Sin stock disponible</span>
          )}
        </div>

        <div className="item-detail-description">
          <h3>Descripción</h3>
          <p>{product.description}</p>
        </div>

        <div className="item-detail-specs">
          <h3>Especificaciones</h3>
          <ul>
            <li>
              <strong>Pantalla:</strong> {product.specs.screen}
            </li>
            <li>
              <strong>Procesador:</strong> {product.specs.processor}
            </li>
            <li>
              <strong>RAM:</strong> {product.specs.ram}
            </li>
            <li>
              <strong>Almacenamiento:</strong> {product.specs.storage}
            </li>
            <li>
              <strong>Cámara:</strong> {product.specs.camera}
            </li>
            <li>
              <strong>Batería:</strong> {product.specs.battery}
            </li>
          </ul>
        </div>

        {product.stock > 0 && (
          <div className="item-detail-actions">
            <div className="quantity-selector">
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
                disabled={quantity === product.stock}
              >
                +
              </button>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
          </div>
        )}

        <Link to="/" className="back-link">
          ← Volver al catálogo
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
