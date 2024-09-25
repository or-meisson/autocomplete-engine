import React from "react";
import "./SearchResult.css";

const AutocompleteResult = ({ pic, title, subtitle }) => (
  <div className="autocomplete-result">
    <img src={pic} alt={title} className="pic" />
    <div className="result-description">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  </div>
);

export default AutocompleteResult;
