// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import "./ProductList.css";

const ProductList = ({ items, onAddToCart }) => {
    return (
        <div className='card-list'>
            {items.map((item, index) => (
                <ProductCard key={index} item={item} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default ProductList;
