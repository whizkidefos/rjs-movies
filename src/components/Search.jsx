import React, { useState, useEffect } from "react";

const Search = ({ searchValue, setSearchValue }) => {
  const [inputValue, setInputValue] = useState(searchValue);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchValue(inputValue);
    }, 500); // Delay search to avoid too many API calls

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue, setSearchValue]);

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search icon" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for a movie..."
        />
      </div>
    </div>
  );
};

export default Search;