import React from 'react';
import "./ProductCard.css";

const ProductCard = ({ item }) => {
    return (
        <div className='productCard'>
            <div className="prodImg">
                <img src={item.image} alt={item.model} />
            </div>
            <div className="prodDetails">
                <h4>{item.model}</h4>
                <div>
                    <small>{item.colors }</small>
                    <h3 className='prod_Price'> ${item.listPrice}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
