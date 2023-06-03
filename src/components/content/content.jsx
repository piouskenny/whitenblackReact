import React from "react";
import { useState, useEffect } from "react";

const Content = ({ searchContent }) => {
  const [apiResponse, SetApiResponse] = useState([]);
  const [error, setError] = useState(null);

  const fetchApidata = async (title) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${title}`
      );
      const data = await response.json();
      SetApiResponse(data);
      // Test useState
      console.log(apiResponse);
    } catch (error) {
      setError("Not found");
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchContent) {
      fetchApidata(searchContent);
    } else {
      fetchApidata("a");
    }
  }, [searchContent]);

  useEffect(() => {
    console.log(apiResponse);
  }, [apiResponse]);

  if (!apiResponse || apiResponse.length === 0) {
    return <div className="text-center mt-10">Please search for a word.</div>;
  }

  return (
    <div className="mt-10 md:mt-18">
      <div className="">
        <div className="flex items-center justify-between">
          <div>
            {/* Search Word */}
            <h1 className="text-gray-800 dark:text-white font-bold text-4xl md:text-5xl lg:text-6xl">
              {apiResponse[0].word}
            </h1>
            {/* Phonetic */}
            <p className="text-purple-600 pt-2 md:pt-4 italic font-light md:text-xl">
              {apiResponse[0].phonetic}
            </p>
          </div>

          <div className="text-purple-800 bg-purple-300 p-2 rounded-full">
            {/* <audio src="" controls/> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </div>
        </div>

        {/* Meaning
      {/* .map of foreach meaning */}
        {apiResponse.map((item, index) => (
          <div key={index} className="md:mt-10">
            {item.meanings.map((meaning, meaningIndex) => (
              <div key={meaningIndex}>
                {/* The Part of the Speach */}
                <div className="flex items-center space-x-2 text-black dark:text-white my-4 md:my-6">
                  <p className="font-bold md:text-md">{meaning.partOfSpeech}</p>
                  <hr className="bg-gray-200 dark:bg-gray-900 opacity-30 w-full" />
                </div>

                <div className="flex">
                  <h1 className="text-md md:text-xl text-gray-600 dark:text-gray-500 py-4">
                    Meaning
                  </h1>
                </div>
                <div className="text-gray-800 dark:text-gray-300 mt-4 md:mt-8">
                  {/* For each Definiation */}
                  <ul className="px-10 list-disc">
                    {meaning.definitions.map((definition, definitionIndex) => (
                      <li key={definitionIndex} className="py-2">
                        <span>{definition.definition}</span>
                        {/* If synonyms */}
                        <h1 className="text-md md:text-xl text-gray-600 dark:text-gray-500 py-1">
                          synonyms:
                          {definition.synonyms.length > 0 && (
                            <>
                              <span className="text-purple-600">
                                {definition.synonyms.join(", ")}
                              </span>
                            </>
                          )}
                        </h1>

                        {/* If antonyms */}
                        <h1 className="text-md md:text-xl text-gray-600 dark:text-gray-500 py-1">
                          antonyms:
                          {definition.antonyms.length > 0 && (
                            <>
                              <span className="text-purple-600">
                                {definition.antonyms.join(", ")}
                              </span>
                            </>
                          )}
                        </h1>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}

        <p className="mt-10  text-gray-600 dark:text-gray-500 ">
          <span className="pr-4"> Source:</span>
          <a href="https://dictionaryapi.dev/">https://dictionaryapi.dev/</a>
        </p>
      </div>
    </div>
  );
};

export default Content;
