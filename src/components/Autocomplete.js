import { useState } from "react";
import AutocompleteResult from "./AutocompleteResult";
import "./Autocomplete.css";
import searchIcon from "../assets/search-icon.png";

const Autocomplete = ({ suggestions, onSearch, onType, isSearching }) => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => {
    setIsOpen(true);
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
            setInput(value)
            if (value.length > 1) setIsOpen(true);
            onType(value);

        }}  

          value={input}
          id="search-input"
        />
        {isOpen && (
          <div id="autocomplete-results-container">
            <div id="autocomplete-results-list">
            {input.length > 1 && suggestions.length ? (
              suggestions.map((suggestion) => (
                <AutocompleteResult
                  key={suggestion.id}
                  pic={suggestion.profile_pic}
                  title={suggestion.name}
                  subtitle={suggestion.job_title}
                />
              ))

        ) : null}
                    </div>
                    </div>
        )}
      </div>
      <button id="search-button" onClick={onSearch}>
        <img
          src={searchIcon}
          style={{ marginTop: 2, width: "12px", height: "12px" }}
        />
      </button>
    </div>
  );
};

export default Autocomplete;
