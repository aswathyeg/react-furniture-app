import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Card.css";
import Card from 'react-bootstrap/Card';
const Cards = ({products}) => {
  const [renderedCardIds,setRenderdCardIds]=useState([])
  
  return (
    <div>
      {products?.map(item=>(
        
        <Container>
          
          
    <Card key={item.id} >
            <Card.Img variant="top" key={item.id} src={item.imageUrl}
             style={{ maxWidth: '100%', height: '20%' }} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
              {item.text}
              </Card.Text>
              <button className="card-btn">View product</button>
            </Card.Body>
          </Card>
          </Container>
          ))}
          </div>)
}
export default Cards;
