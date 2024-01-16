import React from "react";

function Card({ logements }) {
    return (
        <div className="card-style">
            {logements.map((logement) => (
                <div className="card" key={logement.id}>
                    <img src={logement.cover} alt={logement.title}></img>
                    <p className="card-title">{logement.title}</p>
                </div>
            ))}
        </div>
    );
}
export default Card;