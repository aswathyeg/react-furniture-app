import React from 'react'
import NewNavbar from './NewNavbar'
import { useState } from 'react';
import ProductCard from './ProductCard';

const FilterableProductCard = ({products}) => {
    const [filterText, setFilterText] = useState('');
  return (
    <div>
      <NewNavbar
       filterText={filterText}
       onFilterTextChange={setFilterText}/>
       <ProductCard 
       products={products} 
       filterText={filterText}
       />
      
        
    </div>
  )
}

export default FilterableProductCard