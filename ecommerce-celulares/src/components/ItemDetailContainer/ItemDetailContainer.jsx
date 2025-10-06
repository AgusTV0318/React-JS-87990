import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <div className="item-detail-container">
        <div className="container">
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Cargando producto...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="item-detail-container">
        <div className="container">
          <div className="error-message">
            <h2>Producto no encontrado</h2>
            <p>Lo sentimos, el producto que buscas no existe.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <div className="container">
        <ItemDetail product={product} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
