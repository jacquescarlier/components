import React from "react";
import "./cardText.css"
function CardText({ dataLink }) {
    return (
        <div className="linkContainer">
            <div className="cardText">
                <p>cardtext</p>
                {dataLink.map((link) => (
                    <div className="cardLink" key={link.id}>
                        <a target="_blank" href={link.url} >{link.title} </a>
                    </div>
                ))}
            </div>
            <div className="cardText">
                <p>2</p>
                {dataLink.map((link) => (
                    <div className="cardLink" key={link.id}>
                        <a target="_blank" href={link.url} >{link.title} </a>
                    </div>
                ))}
            </div>
            <div className="cardText">
                <p>3</p>
                {dataLink.map((link) => (
                    <div className="cardLink" key={link.id}>
                        <a target="_blank" href={link.url} >{link.title} </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default CardText;