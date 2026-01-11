import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="card-section">
        <img className="item-pic" src="./item-ej.png" alt="item" />
      </div>
      <div className="card-section">ITEM DESCRIPTION</div>
      <div className="card-section">
        <button>NOTIFY ME</button>
      </div>
    </div>
  );
}
