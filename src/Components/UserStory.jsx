import React from "react";
import "./UserStory.css";

const UserStory = ({ image, title, subtitle, content, stars }) => {
    // Function to render stars dynamically based on the `stars` prop
    const renderStars = () => {
        const fullStar = "★"; // Filled star
        const emptyStar = "☆"; // Empty star
        return fullStar.repeat(stars) + emptyStar.repeat(5 - stars);
    };

    return (
        <div className="UserStory">
            <div className="profilecard">
                {/* Profile image */}
                <img className="profileimage" src={image} alt="Profile" />

                {/* User name */}
                <h1>{title}</h1>

                {/* Subtitle or designation */}
                <h2>{subtitle}</h2>

                {/* User's comment */}
                <p>{content}</p>

                {/* Dynamic star rating */}
                <div className="stars">{renderStars()}</div>
            </div>
        </div>
    );
};

export default UserStory;
