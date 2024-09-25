import { useState } from "react";
import AutocompleteResult from "./AutocompleteResult";
import "./Autocomplete.css";
import searchIcon from "../assets/search-icon.png";

const Autocomplete = ({ suggestions, onSearch, onType }) => {
  const [input, setInput] = useState("");


  return (
    <div id="autocomplete-container">
      <div id="search-bar">
        <input
          type="text"
          onChange={(e) => {
            onType()
            setInput(e.target.value)
        }}
          value={input}
          id="search-input"
        />
        {input.length > 1 && suggestions.length ? (
          <div id="autocomplete-results-container">
            <div id="autocomplete-results-list">
              {suggestions.map((suggestion) => (
                <AutocompleteResult
                  key={suggestion.id}
                  pic={suggestion.profile_pic}
                  title={suggestion.name}
                  subtitle={suggestion.job_title}
                />
              ))}
            </div>
          </div>
        ) : null}
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
