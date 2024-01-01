import React from "react";
import "./Card.css";

const Card = ({products}) => {
  
  return (
    
    <div>
    {products?.map(item=>(
      
      <div className="card">
      <div className="card-body"key={item.id} >
        <img src={item.imageUrl} className={item.id>3?"card-image" :"wrapper"}
         alt={item.title} 
         />
        <h2 className="card-title">{item.title}</h2>
        <p className="card-description">{item.text}</p>
        <button className="card-btn">View product</button>
      </div>
      </div>

    ))}
    </div>
  );
};

export default Card;
