import { useState } from "react";
import SearchResult from "./SearchResult";
import "./Autocomplete.css";
import searchIcon from "../assets/search-icon.png";

const Autocomplete = ({ suggestions, onSearch, onType, onFocus }) => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => {
    setIsOpen(true);
    onFocus();
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <div id="autocomplete-container">
      <div id="search-bar">
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => {
            const value = e.target.value;
            setInput(value);
            if (value.length > 1) setIsOpen(true);
            onType(value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsOpen(false);

              onSearch();
            }
          }}
          value={input}
          id="search-input"
          placeholder="Search..."
        />
        {isOpen && input.length > 1 && suggestions.length > 0 && (
          <div id="autocomplete-results-container">
            <div id="autocomplete-results-list">
              {suggestions.map((suggestion, i) => (
                <>
                  {i !== 0 && <div className="autocomplete-separator"> </div>}
                  <SearchResult
                    key={suggestion.id}
                    pic={suggestion.profile_pic}
                    title={suggestion.name}
                    subtitle={suggestion.job_title}
                  />
                </>
              ))}
            </div>
          </div>
        )}
      </div>
      <button
        id="search-button"
        onClick={() => {
          onSearch();
        }}
      >
        <img src={searchIcon} id="search-icon" alt="search" />
      </button>
    </div>
  );
};

export default Autocomplete;
