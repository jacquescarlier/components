import React from "react";
import { Link } from "react-router-dom";

function Card({ logements }) {
    return (
        <div className="card-style">
            {logements.map((logement) => (
                <div className="card">
                    <img src={logement.cover} alt={logement.title}></img>
                    <p className="card-title">{logement.title}</p>
                </div>
            ))}
        </div>
    );
}
export default Card;