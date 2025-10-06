import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <h1>📱 CelularShop</h1>
        </Link>

        <ul className="navbar-menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/apple"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Apple
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/samsung"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Samsung
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/google"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Google
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/xiaomi"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Xiaomi
            </NavLink>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
