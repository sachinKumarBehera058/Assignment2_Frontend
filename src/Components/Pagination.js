import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="page">
      <button
        className="pagination-button"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageNumbers.map((number) => (
        <button
          className={`pagination-button ${currentPage === number ? 'active' : ''}`}
          key={number}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      <button
        className="pagination-button"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
