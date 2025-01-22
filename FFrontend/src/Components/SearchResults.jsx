import React, { useState } from "react";
import "./SearchResults.css";

const SearchResults = ({ data, currentPage, itemsPerPage, onResultClick }) => {
  console.log(data);
  const [showAnswers, setShowAnswers] = useState({});

  // Calculate start and end indices for slicing
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  // Slice the data for the current page
  const currentResults = data.slice(startIndex, endIndex);

  if (currentResults.length === 0) {
    return (
      <div className="results-container ">
        <div className="result-item ">No results found.</div>
      </div>
    );
  }

  const toggleAnswer = (id) => {
    setShowAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: !prevAnswers[id],
    }));
  };

  return (
    <div className="results-container">
      {currentResults.map((item, questionIndex) => (
        <div key={item._id} className="result-item">
          <div className="result-title" onClick={() => onResultClick(item)}>
            Q{startIndex + questionIndex + 1}. {item.title}
          </div>

          {item.type === 'MCQ' && (
            <div className="options">
              {item.options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${
                    showAnswers[item._id] && option.isCorrectAnswer
                      ? 'highlight-correct'
                      : ''
                  }`}
                >
                  {`${String.fromCharCode(97 + index)})`} {option.text}
                </div>
              ))}
              <button
                className="toggle-answer-btn"
                onClick={() => toggleAnswer(item._id)}
              >
                {showAnswers[item._id] ? 'Hide Answer' : 'Show Answer'}
              </button>
            </div>
          )}

          {item.type === 'ANAGRAM' && (
            <div className="anagram-section">
              <div className="letters">
                {item.blocks.map((block, index) =>
                  block.showInOption ? (
                    <span key={index} className="letter">
                      {block.text}
                    </span>
                  ) : null
                )}
              </div>
              {showAnswers[item._id] && (
                <div className="correct-answer">{item.solution}</div>
              )}
              <button
                className="toggle-answer-btn"
                onClick={() => toggleAnswer(item._id)}
              >
                {showAnswers[item._id] ? 'Hide Answer' : 'Show Answer'}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
