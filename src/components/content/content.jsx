import React from "react";

const Content = () => {
  return (
    <div className="mt-10 md:mt-18">
      <div className="flex">
        <div>
          {/* Search Word */}
          <h1 className="text-gray-800 dark:text-white font-bold text-4xl md:text-5xl lg:text-6xl">
            KeyWord
          </h1>
          {/* Phonetic */}
          <p className="text-purple-600 pt-2 md:pt-4 italic font-light md:text-xl">
            / həˈləʊ /
          </p>
        </div>

        {/* Origin Of the Word */}
      </div>
      <p className="mt-4 md:mt-10 text-gray-500 text-sm md:text-md">
        <span className="font-bold">Origin:</span>  early 19th century: variant of earlier hollo ; related to
        holla.
      </p>


      {/* Meaning */}

      <div className="mt-4 md:mt-10">
        <h1 className="text-md md:text-xl text-gray-600 dark:text-gray-200">Meaning</h1>
      </div>
    </div>
  );
};

export default Content;
