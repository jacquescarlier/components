import React from "react";
import { Link } from "react-router-dom";

function Card2({ logements }) {
    return (
        <div className="card-style">
      {logements.map((logement) => (
        <Link
          to={`/Logements/${logement.id}`}
          key={logement.id}
          className="card"
        >
          <img src={logement.cover} alt={logement.title}></img>
          <p className="card-title">{logement.title}</p>
        </Link>
      ))}
    </div>
    );
}
export default Card2;