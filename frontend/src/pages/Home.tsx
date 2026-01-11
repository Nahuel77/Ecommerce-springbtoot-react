import "./Home.css";
import Card from "../components/card/Card";

export default function Home() {
  return (
    <div className="home">
      <video autoPlay muted loop playsInline>
        <source src="./bg3.mp4" type="video/mp4" />
      </video>
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
            <h3>FEATURED PRODUCTS</h3>
          </div>
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
