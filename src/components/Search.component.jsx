import React, { useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");


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
        <input type="submit" value="Search" />
      </div>
    </div>
  );
}
