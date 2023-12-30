import React from 'react'
import Card from './Card'

const FilterableProductCard = () => {
    const [filterText, setFilterText] = useState('');
  return (
    <div>
        <Card  filterText={filterText} />
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
    </div>
  )
}

export default FilterableProductCard