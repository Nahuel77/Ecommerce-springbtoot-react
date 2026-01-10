import "./Nav.css";
import { Droplet } from "lucide-react";

export default function Nav() {
  return (
    <header>
      <div className="nav">
        <div className="nav-section">
          <Droplet />
          <span>Drop$</span>
        </div>
        <div className="nav-section">
          <h1>KYNKI</h1>
        </div>
        <div className="nav-section">
          <ul className="options">
            <li className="option">About</li>
            <li className="option">Shop</li>
            <li className="option">
              <button className="sign-in-btn">Sign In</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
