import React from "react";
import { Container } from "react-bootstrap";
// import "./Card.css";
import Card from 'react-bootstrap/Card';
const Cards = ({products}) => {
  
  return (
    <div>
      {products?.map(item=>(
        <Container>
    <Card>
            <Card.Img variant="top" key={item.id} src={item.imageUrl} />
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
