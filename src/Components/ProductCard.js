import React from 'react';
import "./ProductCard.css";

const ProductCard = ({ item }) => {
    return (
        <div className='productCard'>
            <div className="prodImg">
                <img src={item.image} alt={item.model} />
            </div>
            <div className="prodDetails">
                <h3>{item.model}</h3>
                <p>{item.colors} <b> ${ item.listPrice}</b></p>
            </div>
        </div>
    );
};

export default ProductCard;
