import React, { useState } from "react";
import Autocomplete from "../components/Autocomplete";
import "./SearchPage.css";
import profilePic from "../assets/user.jpg";
import { debounce } from "../utils"; // Import the debounce function
import SearchResult from "../components/SearchResult";

const DEBOUNCE_DELAY = 300;

const RESULTS_TITLE = "SEARCH RESULTS";
const SEARCH_TITLE = "LOOKING FOR AN EMPLOYEE?";

const SearchPage = () => {
  const [isSearching, setIsSearching] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(
        `http://localhost:5000/search?query=${query}`
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
    if (inputValue.length <=1){
      setSuggestions([])
    }

    debouncedFetchSuggestions(inputValue);
  };

  const onSearchBarFocus = () => {
    setIsSearching(true);
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
          suggestions={suggestions}
          onSearch={onSearch}
          onType={onType}
          isSearching={isSearching}
          onFocus={onSearchBarFocus}
        />
      </div>
      {!isSearching && suggestions.length > 0 &&
      <div id="search-results-container">
            {suggestions.map((suggestion) => (
                <SearchResult
                  key={suggestion.id}
                  pic={suggestion.profile_pic}
                  title={suggestion.name}
                  subtitle={suggestion.job_title}
                />
              ))}

      </div>
}
    </div>
  );
};

export default SearchPage;
