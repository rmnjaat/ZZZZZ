import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import Pagination from "./Components/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Filter from "./Components/FIlter"; // Import Filter component

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Start from page 1
  const [showPageNumber, setshowPageNumber] = useState(false);
  const [filters, setFilters] = useState({
    MCQ: false,
    ANAGRAM: false,
  });

  const [data, setData] = useState([]);
  const itemsPerPage = 3; // Customize the number of results per page

  const allData = [
    // 20 Anagram Questions (WORD)

    {
      _id: "665568f4ac3f6205c943a937",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "T", showInOption: true, isAnswer: true },
        { text: "O", showInOption: true, isAnswer: true },
        { text: "Y", showInOption: true, isAnswer: true },
      ],
      solution: "TOY",
      title: "Rearrange the letters to form a word",
    },

    {
      _id: "665568f4ac3f6205c943a938",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "C", showInOption: true, isAnswer: true },
        { text: "A", showInOption: true, isAnswer: true },
        { text: "T", showInOption: true, isAnswer: true },
      ],
      solution: "CAT",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a939",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "B", showInOption: true, isAnswer: true },
        { text: "O", showInOption: true, isAnswer: true },
        { text: "Y", showInOption: true, isAnswer: true },
      ],
      solution: "BOY",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a940",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "S", showInOption: true, isAnswer: true },
        { text: "U", showInOption: true, isAnswer: true },
        { text: "N", showInOption: true, isAnswer: true },
      ],
      solution: "SUN",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a937",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "T", showInOption: true, isAnswer: true },
        { text: "O", showInOption: true, isAnswer: true },
        { text: "Y", showInOption: true, isAnswer: true },
      ],
      solution: "TOY",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a938",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "C", showInOption: true, isAnswer: true },
        { text: "A", showInOption: true, isAnswer: true },
        { text: "T", showInOption: true, isAnswer: true },
      ],
      solution: "CAT",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a939",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "B", showInOption: true, isAnswer: true },
        { text: "O", showInOption: true, isAnswer: true },
        { text: "Y", showInOption: true, isAnswer: true },
      ],
      solution: "BOY",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a940",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "S", showInOption: true, isAnswer: true },
        { text: "U", showInOption: true, isAnswer: true },
        { text: "N", showInOption: true, isAnswer: true },
      ],
      solution: "SUN",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a937",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "T", showInOption: true, isAnswer: true },
        { text: "O", showInOption: true, isAnswer: true },
        { text: "Y", showInOption: true, isAnswer: true },
      ],
      solution: "TOY",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a938",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "C", showInOption: true, isAnswer: true },
        { text: "A", showInOption: true, isAnswer: true },
        { text: "T", showInOption: true, isAnswer: true },
      ],
      solution: "CAT",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a939",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "B", showInOption: true, isAnswer: true },
        { text: "O", showInOption: true, isAnswer: true },
        { text: "Y", showInOption: true, isAnswer: true },
      ],
      solution: "BOY",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a940",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "S", showInOption: true, isAnswer: true },
        { text: "U", showInOption: true, isAnswer: true },
        { text: "N", showInOption: true, isAnswer: true },
      ],
      solution: "SUN",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a937",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "T", showInOption: true, isAnswer: true },
        { text: "O", showInOption: true, isAnswer: true },
        { text: "Y", showInOption: true, isAnswer: true },
      ],
      solution: "TOY",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a938",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "C", showInOption: true, isAnswer: true },
        { text: "A", showInOption: true, isAnswer: true },
        { text: "T", showInOption: true, isAnswer: true },
      ],
      solution: "CAT",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a939",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "B", showInOption: true, isAnswer: true },
        { text: "O", showInOption: true, isAnswer: true },
        { text: "Y", showInOption: true, isAnswer: true },
      ],
      solution: "BOY",
      title: "Rearrange the letters to form a word",
    },
    {
      _id: "665568f4ac3f6205c943a940",
      type: "ANAGRAM",
      anagramType: "WORD",
      blocks: [
        { text: "S", showInOption: true, isAnswer: true },
        { text: "U", showInOption: true, isAnswer: true },
        { text: "N", showInOption: true, isAnswer: true },
      ],
      solution: "SUN",
      title: "Rearrange the letters to form a word",
    },
    // Continue for 16 more ANAGRAM questions...

    // 20 Multiple-Choice Questions (MCQ)
    {
      _id: "6655b1c5d3d666003d3b1d83",
      type: "MCQ",
      options: [
        { text: "under", isCorrectAnswer: true },
        { text: "below", isCorrectAnswer: false },
        { text: "above", isCorrectAnswer: false },
        { text: "over", isCorrectAnswer: false },
      ],
      title:
        "In my previous job, I often had to complete tasks ______ tight deadlines.",
    },
    {
      _id: "6655b1c5d3d666003d3b1d84",
      type: "MCQ",
      options: [
        { text: "in", isCorrectAnswer: true },
        { text: "on", isCorrectAnswer: false },
        { text: "over", isCorrectAnswer: false },
        { text: "at", isCorrectAnswer: false },
      ],
      title: "I left my keys ______ the table.",
    },
    {
      _id: "6655b1c5d3d666003d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ never seen stuch a beautiful sunset before.",
    },
    {
      _id: "6655b1c5d3d666500d3d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ never seeen such a beautiful sunset before.",
    },
    {
      _id: "6655b1c5d3d6660033d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ never seein such a beautiful sunset before.",
    },
    {
      _id: "6655b1c5d3d6665003d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ never sern such a beautiful sunset before.",
    },
    {
      _id: "6655b1c5d3d3666003d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ never seen suc5h a beautiful sunset before.",
    },
    {
      _id: "6655b1c5d3d6466003d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ neveer seen such a beautiful sunset before.",
    },
    {
      _id: "665555b1c5d3d666003d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ never sehen such a beautiful sunset before.",
    },
    {
      _id: "6655b1c5d3d5666003d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ never seen such a beau5tiful sunset before.",
    },

    {
      _id: "66555b1c5d3d666003d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ nevehr seen such a beautiful sunset before.",
    },
    {
      _id: "6655b1c5d3d666003d35b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ never seen such a bejautiful sunset before.",
    },
    {
      _id: "6655b51c5d3d666003d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ never s6een such a beautiful sunset before.",
    },
    {
      _id: "6655b1c5d3d6660035d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ never seen such a beabutiful sunset before.",
    },
    {
      _id: "6655b1c5d3d6566003d3b1d85",
      type: "MCQ",
      options: [
        { text: "has", isCorrectAnswer: false },
        { text: "have", isCorrectAnswer: true },
        { text: "is", isCorrectAnswer: false },
        { text: "are", isCorrectAnswer: false },
      ],
      title: "I ______ never steen such a beautiful sunset before.",
    },

    {
      _id: "6655b1c5d3d666003d3b1d86",
      type: "MCQ",
      options: [
        { text: "whose", isCorrectAnswer: true },
        { text: "who's", isCorrectAnswer: false },
        { text: "who", isCorrectAnswer: false },
        { text: "whom", isCorrectAnswer: false },
      ],
      title: "Do you know the person ______ car is parked outside?",
    },
    // Continue for 16 more MCQ questions...
  ];

  // Handle search query change
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to page 1 when search query changes
  };

  // Apply filters and search query to data
  const getFilteredData = () => {
    let filtered = allData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filters.MCQ) {
      filtered = filtered.filter((item) => item.type === "MCQ");
    }
    if (filters.ANAGRAM) {
      filtered = filtered.filter((item) => item.type === "ANAGRAM");
    }

    if (filtered.length == 0) {
      setshowPageNumber(false);
    } else {
      setshowPageNumber(true);
    }

    return filtered;
  };

  // Update data when search query or filters change
  useEffect(() => {
    if (searchQuery === "") {
      setData([]); // If search query is empty, reset data to empty array
    } else {
      const filteredData = getFilteredData();
      setData(filteredData);
    }
    setCurrentPage(1); // Reset to the first page when filters or search query change
  }, [searchQuery, filters]);

  // Handle filter changes (checkboxes)
  const handleFilterChange = (filterType) => {
    setFilters((prevFilters) => {
      const updatedFilters = { MCQ: false, ANAGRAM: false }; // Reset all filters
      updatedFilters[filterType] = !prevFilters[filterType]; // Toggle the selected filter
      return updatedFilters;
    });
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      MCQ: false,
      ANAGRAM: false,
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const resultsSummary = () => {
    const appliedFilters = Object.keys(filters)
      .filter((key) => filters[key])
      .map((key) => key)
      .join(", ");

    return (
      <div className="results-summary">
      Questions having  "{searchQuery}"{" "}
        {appliedFilters && ` with type : ${appliedFilters}`}
      </div>
    );
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />

      {/* Filter component */}
      <Filter
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={resetFilters}
      />

      {/* Results summary */}
      {searchQuery && (
        <div className="summary-container">{resultsSummary()}</div>
      )}

      {searchQuery && (
        <SearchResults
          data={data}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onResultClick={(result) => alert(`Selected: ${result.title}`)}
        />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        showPageNumber={showPageNumber}
      />

      <ToastContainer />
    </div>
  );
};

export default App;
