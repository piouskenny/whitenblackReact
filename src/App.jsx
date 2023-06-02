import React from "react";
import Header from "./components/header/header";
import Search from "./components/search/search";
import Content from "./components/content/content";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`container h-screen w-screen ${darkMode ? "dark" : ""}`}>
      <div className="h-screen w-screen bg-white dark:bg-gray-900">
        <div className="px-2 md:px-10 lg:px-40 lg:pt-10 pt-2 ">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Search />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
