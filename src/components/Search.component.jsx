import React, { useState, useEffect, useContext } from "react";
import DataContext from "../contexts/DataContext";
import axios from "axios";

// number of data fetched by each request from HackerNews API
const HITS_PER_PAGE = 10;

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const { data, setData } = useContext(DataContext);
  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue]);

  function handleSearch(input) {
    axios
      .get("http://hn.algolia.com/api/v1/search", {
        params: { query: input, page: page, hitsPerPage: HITS_PER_PAGE },
      })
      .then((res) =>
        res.data.hits.map((hit) => ({
          id: hit.objectID,
          author: hit.author,
          comments: hit.num_comments,
          title: hit.title,
          url: hit.url,
        }))
      )
      .then((rows) => setData(rows))
      .then(() => console.log(data));
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
