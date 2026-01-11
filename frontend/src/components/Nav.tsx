import "./Nav.css";
import { Droplet } from "lucide-react";

export default function Nav() {
  return (
    <header>
      <div className="nav">
        <div className="nav-section">
          <Droplet />
          <span>Drops</span>
        </div>
        <div className="nav-section">
          <h1>KYNKI</h1>
        </div>
        <div className="nav-section">
          <ul className="options">
            <li className="option">About</li>
            <li className="option">Featured</li>
            <li className="option">
              <button className="sign-in-btn">Sign In</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
