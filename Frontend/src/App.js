import "./App.css";
import { useState, useEffect } from "react";

import { fetchQuestionsService } from "./Services/fetchhQuestion";

import Searchbar from "./Components/Search/Searchbar";
import Filter from "./Components/Search/Filter";
import QuestionList from "./Components/QuestionnList/QuestionList";
import Paginationn from "./Components/Paginatioon/Paginationn";
import { QuestionsPerPageDropdown } from "./Components/Paginatioon/QesPerPage";



function App() {
  const [response, setResponse] = useState([]);
  const [currPage, setCurrPage] = useState(1); // State for the current page
  const [questionList, setQuestionList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPage, setTotalPage] = useState(0); // For total pages
  const [loading, setLoading] = useState(false); // Loading state
  const [filter, setFilter] = useState("");

  const [pageLimit, setPageLimit] = useState(3);

  const fetchQuestions = (page, searchQuery, filter, pageLimit) => {



    // console.log(searchQuery);
    setLoading(true);


    fetchQuestionsService(
      filter,        // type
      searchQuery,  // title
      page,         // page
      pageLimit,            // limit
      (response) => {
        setLoading(false);
        setResponse(response);
        const [_, totalPage, questions] = response; // Destructuring the response
        setTotalPage(totalPage);
        setQuestionList(questions);
      },             // onSuccess
      (error) => console.error("Error fetching questions:", error), // onError

    );
  };

  // Fetch questions when page number changes
  useEffect(() => {

    fetchQuestions(currPage, searchQuery, filter, pageLimit);

  }, [currPage, searchQuery, filter, pageLimit]); // Dependency array ensures this runs on page change

  const handlePageChange = (event, value) => {
    setCurrPage(value); // Update current page
  };


  const handleSearchSubmit = (query) => {
    if (query) {
      setFilter("");
      setSearchQuery(query);
    }
  };

  const handleQuesPerChange = (number) => {
    setPageLimit(number);
  }


  return (
    <div className="main-container">
      <div className="container">
        <header className="heading">
          <h2>Search your question</h2>
        </header>
        <Searchbar
          onSearchSubmit={handleSearchSubmit} />
        <Filter searchQuery={searchQuery} filter={filter} setFilter={setFilter} />
        <div className="results-summary">
          <span>Results for "{searchQuery}" filter "{filter}":</span>
          <QuestionsPerPageDropdown options={[3, 5, 10, 15, 20]} handleQuesPerChange={handleQuesPerChange} ></QuestionsPerPageDropdown>
        </div>
        <QuestionList questionList={questionList} currPage={currPage} pageLimit={pageLimit} loading={loading} />
        <Paginationn
          totalPage={totalPage}
          currPage={currPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;
