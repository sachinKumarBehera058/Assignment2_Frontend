import React from 'react';
import "./ColorOptions.css";

const ColorOptions = ({ variants, selectedVariant, onVariantChange }) => {
  return (
    <div className="colorOptions">
      {variants.map((variant, index) => (
        <button
          key={variant._id}
          className={`colorOption ${selectedVariant.color === variant.color ? 'selected' : ''}`}
          onClick={() => onVariantChange(variant)}
          style={{ backgroundColor: variant.color }}
        />
      ))}
    </div>
  );
};

export default ColorOptions;
