import React from 'react'
import Cards from './Cards';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductCard = ({products}) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
  
    <Cards products={products}/>

      </Col>
      ))}
    </Row>
  )
}

export default ProductCard