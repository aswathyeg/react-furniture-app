import React from "react";
import "./Card.css";

const Card = (props) => {
  console.log(props.products)
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.products.img} className="card-image" />
        <h2 className="card-title">{props.products.text}</h2>
        <p className="card-description">{props.products.text}</p>
        <button className="card-btn">View product</button>
      </div>
    </div>
  );
};

export default Card;
