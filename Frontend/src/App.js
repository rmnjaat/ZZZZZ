import "./App.css";
import { useState, useEffect } from "react";

import { fetchQuestionsService } from "./Services/fetchhQuestion";

import Searchbar from "./Components/Searchbar";
import Filter from "./Components/Filter";
import QuestionList from "./Components/QuestionList";
import Paginationn from "./Components/Paginationn";

function App() {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = () => {
    fetchQuestionsService(
      "MCQ",       // type
      "i",         // title
      1,           // page
      10,          // limit
      (questions) => setQuestions(questions),   // onSuccess
      (error) => console.error("Error fetching questions:", error) // onError
    );
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="main-container">
      <div className="container">
        <header className="heading">
          <h2>Search your question</h2>
        </header>
        <Searchbar />
        <Filter />
        <div className="results-summary">
          <span>Results for "Sample Query" filter "MCQ":</span>
        </div>
        <QuestionList questions={questions} />
        <Paginationn />
      </div>
    </div>
  );
}

export default App;
