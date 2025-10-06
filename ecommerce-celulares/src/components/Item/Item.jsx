import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ id, name, brand, price, image, stock }) => {
  return (
    <div className="item-card">
      <div className="item-image-container">
        <img src={image} alt={name} className="item-image" />
        {stock < 10 && stock > 0 && (
          <span className="stock-badge low-stock">¡Últimas unidades!</span>
        )}
        {stock === 0 && (
          <span className="stock-badge out-stock">Sin stock</span>
        )}
      </div>

      <div className="item-content">
        <p className="item-brand">{brand}</p>
        <h3 className="item-name">{name}</h3>

        <div className="item-footer">
          <p className="item-price">${price}</p>
          <Link to={`/item/${id}`} className="item-detail-btn">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
