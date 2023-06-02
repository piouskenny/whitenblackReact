import React from "react";
import { useState } from "react";
const Search = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    alert(keyword);
  };
  return (
    <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl justify-between mt-8 md:mt-12 text-black dark:text-white px-2 py-4">
      <input
        type="text"
        placeholder="keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className=" focus:outline-none h-fit w-[98%] text-black dark:text-white bg-gray-100 dark:bg-gray-800  placeholder:text-black placeholder:dark:text-white placeholder:px-2 rounded-l-xl"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
        onClick={handleSearch}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
};

export default Search;
