import React, { useState } from "react";
import Autocomplete from "../components/Autocomplete";
import "./SearchPage.css";
import profilePic from "../assets/user.jpg";
import { debounce } from "../utils"; // Import the debounce function

const DEBOUNCE_DELAY = 300;

const MOCK_SUGGESTIONS = [
  { id: 1, name: "Erik", profile_pic: profilePic, job_title: "Recruiter" },
  {
    id: 2,
    name: "Berkie",
    profile_pic: profilePic,
    job_title: "Staff Scientist",
  },
  {
    id: 3,
    name: "Starla",
    profile_pic: profilePic,
    job_title: "Budget/Accounting Analyst III",
  },
  {
    id: 4,
    name: "Eyde",
    profile_pic: profilePic,
    job_title: "Computer Systems Analyst IV",
  },
  {
    id: 5,
    name: "Ricky",
    profile_pic: profilePic,
    job_title: "Systems Administrator IV",
  },
  {
    id: 6,
    name: "Conny",
    profile_pic: profilePic,
    job_title: "Statistician I",
  },
];

const RESULTS_TITLE = "SEARCH RESULTS";
const SEARCH_TITLE = "LOOKING FOR AN EMPLOYEE?";

const SearchPage = () => {
  const [isSearching, setIsSearching] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(
        `http://localhost:5000/suggestions?query=${query}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const debouncedFetchSuggestions = debounce((inputValue) => {
    if (inputValue.length > 1) {
      fetchSuggestions(inputValue); // Only fetch suggestions if the input has more than 1 character
    }
  }, DEBOUNCE_DELAY);
  
  const onSearch = () => {
    setIsSearching(false);
  };

  const onType = (inputValue) => {
    setIsSearching(true);
    debouncedFetchSuggestions(inputValue);
  };

  return (
    <div>
      <div id="search-titles">
        <h1 id="page-title">{isSearching ? SEARCH_TITLE : RESULTS_TITLE}</h1>
        <p id="page-subtitle">
          {isSearching
            ? "Click on the search bar to learn our suggestions"
            : "Here are the most relevant results for your search"}
        </p>
      </div>
      <div id="search-bar-and-suggestions">
        <Autocomplete
          suggestions={MOCK_SUGGESTIONS}
          onSearch={onSearch}
          onType={onType}
          isSearching={isSearching}
        />
      </div>
    </div>
  );
};

export default SearchPage;
