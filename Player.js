// Player.js
import React from "react";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div style={{ width: "18rem", margin: "10px" }}>
      <img src={imageUrl} alt={name} style={{ width: "100%" }} />
      <div>
        <h5>{name}</h5>
        <p>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age}
        </p>
      </div>
    </div>
  );
};



export default Player;