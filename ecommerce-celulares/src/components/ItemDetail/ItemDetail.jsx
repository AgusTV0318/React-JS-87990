import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(1);
  const { addItem, getItemQuantity } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity);
  };

  const itemsInCart = getItemQuantity(product.id);

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

        <div className="item-detail-actions">
          {quantityAdded > 0 ? (
            <div className="added-to-cart">
              <p className="success-message">
                ✓ Agregado al carrito ({quantityAdded} unidad
                {quantityAdded > 1 ? "es" : ""})
                {itemsInCart > quantityAdded &&
                  ` - Total en carrito: ${itemsInCart}`}
              </p>
              <div className="cart-actions">
                <Link to="/cart" className="go-to-cart-btn">
                  Ir al carrito
                </Link>
                <Link to="/" className="continue-shopping-btn">
                  Seguir comprando
                </Link>
              </div>
            </div>
          ) : (
            <>
              {itemsInCart > 0 && (
                <p className="already-in-cart">
                  Ya tienes {itemsInCart} unidad{itemsInCart > 1 ? "es" : ""} en
                  el carrito
                </p>
              )}
              <ItemCount
                stock={product.stock}
                initial={1}
                onAdd={handleOnAdd}
              />
            </>
          )}
        </div>

        <Link to="/" className="back-link">
          ← Volver al catálogo
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
