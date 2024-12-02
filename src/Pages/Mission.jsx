import React from "react";
import "./Mission.css";

const Mission = ({ image, title, subtitle, content }) => {
    return (
        <div className="mission-container">
            <img className="top-image" src={image} alt="Mission" />
            <div className="mission-card">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Mission;
