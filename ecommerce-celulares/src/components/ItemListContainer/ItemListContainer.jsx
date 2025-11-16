import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../firebase/services";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchProducts = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();

    fetchProducts
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("❌ Error al cargar productos:", error);
        setError("Error al cargar los productos. Verifica la consola.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  const getCategoryTitle = () => {
    if (!categoryId) return greeting;

    const categoryNames = {
      apple: "iPhone - Apple",
      samsung: "Samsung Galaxy",
      google: "Google Pixel",
      xiaomi: "Xiaomi",
      oneplus: "OnePlus",
      motorola: "Motorola",
    };

    return categoryNames[categoryId] || greeting;
  };

  if (loading) {
    return (
      <div className="item-list-container">
        <div className="container">
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Cargando productos...</p>
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="item-list-container">
        <div className="container">
          <h2 className="greeting">{getCategoryTitle()}</h2>
          <div className="empty-message">
            <p>No se encontraron productos en esta categoría</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <div className="container">
        <h2 className="greeting">{getCategoryTitle()}</h2>
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
