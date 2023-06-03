import React from "react";
import Header from "./components/header/header";
import Search from "./components/search/search";
import Content from "./components/content/content";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchContent, setSearchContent] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchContent(searchTerm);
  };
  
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <div className="h-screen md:h-full w-full bg-white dark:bg-gray-900">
        <div className="px-2 md:px-10 lg:px-40 lg:pt-10 pt-2 mx-0">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Search onSearch={handleSearch} />
          <Content searchContent={searchContent} />
        </div>
      </div>
    </div>
  );
};

export default App;
