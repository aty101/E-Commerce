import React from 'react'
import ProductsList from '../Components/ShowProducts/ProductsList'
import ProductsFilters from '../Components/Filters/ProductsFilters'

export default function Products() {
  return (
    <div>
      <ProductsFilters></ProductsFilters>
      <ProductsList>
        <div className='text-xl py-4'>
          <span className='text-lg opacity-50'>Products Result : </span>
          <span>85</span>
        </div>
      </ProductsList>
    </div>
  )
}
