import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h2 className="logo">NeoGen</h2>

        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
