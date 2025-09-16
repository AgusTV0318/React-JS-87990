import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>📱 CellTECH</h1>
        </div>

        <ul className="navbar-menu">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#productos">Productos</a>
          </li>
          <li>
            <a href="#marcas">Marcas</a>
          </li>
          <li>
            <a href="#ofertas">Ofertas</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
