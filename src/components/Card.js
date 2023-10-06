import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.img} className="card-image" />
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.text}</p>
        <button className="card-btn">View product</button>
      </div>
    </div>
  );
};

export default Card;
