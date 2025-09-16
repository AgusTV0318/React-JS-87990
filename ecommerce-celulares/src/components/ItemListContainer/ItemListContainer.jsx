import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <div className="container">
        <h2 className="greeting">{greeting}</h2>
        <div className="placeholder-content">
          <div className="placeholder-card">
            <div className="placeholder-image">📱</div>
            <h3>iPhone 15 Pro</h3>
            <p>Próximamente disponible</p>
          </div>
          <div className="placeholder-card">
            <div className="placeholder-image">📱</div>
            <h3>Samsung Galaxy S24</h3>
            <p>Próximamente disponible</p>
          </div>
          <div className="placeholder-card">
            <div className="placeholder-image">📱</div>
            <h3>Google Pixel 8</h3>
            <p>Próximamente disponible</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
