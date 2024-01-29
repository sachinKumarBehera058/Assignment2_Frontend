import React from 'react';
import ProductCard from './ProductCard';
import "./ProductList.css";

const ProductList = ({ items }) => {
  return (
    <div className='card-list'>
      {items.map(item => (
        <ProductCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
