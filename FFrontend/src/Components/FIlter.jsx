import React from "react";
import "./Filter.css";

const Filter = ({ filters = { MCQ: false, ANAGRAM: false }, onFilterChange, onResetFilters }) => {
  const selectedFilter = Object.keys(filters).find((key) => filters[key]);

  return (
    <div className="filter-container">
      <h3>Filter by Question Type</h3>
      <div className="filter-options">
        <label>
          <input
            type="radio"
            name="questionType"
            value="MCQ"
            checked={selectedFilter === "MCQ"}
            onChange={() => onFilterChange("MCQ")}
          />
          MCQ
        </label>
        <label>
          <input
            type="radio"
            name="questionType"
            value="ANAGRAM"
            checked={selectedFilter === "ANAGRAM"}
            onChange={() => onFilterChange("ANAGRAM")}
          />
          Anagram
        </label>
        <button onClick={onResetFilters}>Reset Filters</button>
      </div>
    </div>
  );
};

export default Filter;
