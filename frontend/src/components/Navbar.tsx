import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";
import { Bell, User, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="header">
      <div className="topbar">
        <span>📍 Calle Don Polito 118 - Rivadavia SM</span>
        <span className="icons">
          <Bell className="icon" />
          <ThemeToggle />
        </span>
      </div>

      <div className="navbar">
        <h1 className="logo">KYNKI</h1>
        <div className="nav-rightside">
          <div className="search">
            <form className="search">
              <input type="search" placeholder="Buscar productos..." />
              <button className="searchBtn" type="submit">
                <img src="./public/icons/search.svg" alt="search" />
              </button>
            </form>
          </div>

          <div className="navPanel">
            <User className="navPanelIcon" />
            <ShoppingCart className="navPanelIcon" />
          </div>
        </div>
      </div>
      <div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Guitarras</a>
          <a href="#">Bajos</a>
          <a href="#">Amplificadores</a>
          <a href="#">Pedales</a>
          <a href="#">Otros</a>
        </nav>
      </div>
    </header>
  );
}
