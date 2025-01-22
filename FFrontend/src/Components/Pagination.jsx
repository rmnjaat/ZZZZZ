import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange , showPageNumber }) => {
  return ( showPageNumber &&
    <div className="pagination-container">
      <button
        disabled={currentPage ===0}
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      >
        Prev
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
