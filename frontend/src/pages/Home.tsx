import "./Home.css";
import Card from "../components/card/Card";
import Manifesto from "./Manifesto";

export default function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="section-home">
          <div>
            <h2>EPIC DROPS.</h2>
            <h2>LIMITED TIME ONLY.</h2>
          </div>
          <div>
            <button className="shopthedrop">SHOP THE DROP</button>
          </div>
        </div>
        <div className="section-home">
          <div>
          </div>
          <Manifesto/>
          <h3>FEATURED PRODUCTS</h3>
          <div className="drops">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
