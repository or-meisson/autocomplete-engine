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
            setInput(value)
            if (value.length > 1) setIsOpen(true);
            onType(value);

        }}  
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setIsOpen(false); // Close the autocomplete results

            onSearch();  // Trigger search on "Enter" key press
          }
        }}
          value={input}
          id="search-input"
        />
        {isOpen && input.length > 1 && suggestions.length > 0 && (
          <div id="autocomplete-results-container">
            <div id="autocomplete-results-list">{
              suggestions.map((suggestion) => (
                <SearchResult
                  key={suggestion.id}
                  pic={suggestion.profile_pic}
                  title={suggestion.name}
                  subtitle={suggestion.job_title}
                />
              ))

            } 
                    </div>
                    </div>
        )}
      </div>
      <button id="search-button" onClick={() => {onSearch()
      // setInput('')

      }}>
        <img
          src={searchIcon}
          style={{ marginTop: 2, width: "12px", height: "12px" }}
        />
      </button>
    </div>
  );
};

export default Autocomplete;
