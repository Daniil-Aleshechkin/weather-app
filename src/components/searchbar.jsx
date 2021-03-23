import React from "react";
import CIcon from "@coreui/icons-react";
import "./searchbar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input id="weather-city" type="text" />{" "}
      <button onClick={onSearch} className="btn btn-primary">
        <CIcon name="cil-search" />
      </button>{" "}
    </div>
  );
};

export default SearchBar;
