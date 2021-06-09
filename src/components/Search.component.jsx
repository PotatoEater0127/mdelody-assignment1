import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue]);

  function handleSearch(input) {
    axios
      .get("http://hn.algolia.com/api/v1/search", { params: { query: input } })
      .then((res) => console.log(res));
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
      <div>
        <input
          type="submit"
          value="Search"
          onClick={() => {
            handleSearch(searchValue);
          }}
        />
      </div>
    </div>
  );
}
