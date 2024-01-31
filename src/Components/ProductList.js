import React from 'react';
import ProductCard from './ProductCard';
import "./ProductList.css";

const ProductList = ({ items, onAddToCart }) => {
    return (
        <div className='card-list'>
            {items.map((item) => (
                <ProductCard key={item._id} item={item} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default ProductList;
