import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <div className="topbar">
        <span>📍 Calle Don Polito 118 - Rivadavia SM</span>
        <span className="icons">
          <i className="icon">🔔</i>
        </span>
      </div>

      <div className="navbar">
        <h1 className="logo">KYNKI</h1>

        <div className="search">
          <form className="search">
            <input type="search" placeholder="Buscar productos..." />
            <button className="searchBtn" type="submit">
              <img src="./public/icons/search.svg" alt="search" />
            </button>
          </form>
        </div>

        <div className="navPanel">
          <span>
            <img
              className="navPanelIcon"
              src="./public/icons/cart-48.png"
              alt="cart"
            />
          </span>
          <span>
            <img
              className="navPanelIcon"
              src="./public/icons/user-48.png"
              alt="user"
            />
          </span>
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
