import React, { useState } from 'react';
import RatingStars from './RatingStars';
import { FaRegStar, FaShoppingCart } from 'react-icons/fa';
import ColorOptions from './ColorOptions'; 
import "./ProductCard.css";

const ProductCard = ({ item, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(item.variants[0]);
  const [addToCartCount, setAddToCartCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  const handleAddToCart = () => {
    setAddToCartCount(addToCartCount + 1);
    onAddToCart(); 
  };

  return (
    <div
      className={`productCard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="prodImg">
        <img src={selectedVariant.image} alt={item.title} />
        {isHovered && (
          <div className="addToCartIcon" onClick={handleAddToCart}>
            <FaShoppingCart />
          </div>
        )}
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
