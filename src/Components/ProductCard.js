import React, { useState } from 'react';
import RatingStars from './RatingStars';
import { FaRegStar } from 'react-icons/fa';
import ColorOptions from './ColorOptions'; 
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  const [selectedVariant, setSelectedVariant] = useState(item.variants[0]);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className='productCard'>
      <div className="prodImg">
        <img src={selectedVariant.image} alt={item.title} />
      </div>
      <div className="prodDetails">
        <h4>{item.title}</h4>
        <h3 className='prod_Price'> ${item.price}</h3>
        <ColorOptions
          variants={item.variants}
          selectedVariant={selectedVariant}
          onVariantChange={handleVariantChange}
        />
        <div className="rating">
          {item.rating ? <RatingStars rating={item.rating} /> : <FaRegStar />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
