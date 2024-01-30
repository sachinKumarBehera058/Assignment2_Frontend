// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import "./ProductList.css";

const ProductList = ({ items }) => {
    return (
        <div className='card-list'>
            {items.map((item,index) => (
                <ProductCard key={index} item={item} />
            ))}
        </div>
    );
};

export default ProductList;
