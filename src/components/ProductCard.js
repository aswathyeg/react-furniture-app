import React from 'react'
import Card from './Card';
import "./Card.css";
const ProductCard = ({products}) => {
  return (
    <div className='productCard' > 
  
    <Card products={products}/>
    </div>
   
  )
}

export default ProductCard