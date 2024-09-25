import React, { useState } from "react";
import Autocomplete from "../components/Autocomplete";
import "./SearchPage.css";
import profilePic from "../assets/user.jpg";
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

  const onSearch = () => {
    setIsSearching(false);
  };

  const onType = () => {
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
          suggestions={MOCK_SUGGESTIONS}
          onSearch={onSearch}
          onType={onType}
        />
      </div>
    </div>
  );
};

export default SearchPage;
