/**
@function useSearch
A custom React hook, useSearch, designed for searching and filtering data based on specified search fields.
@param {Array} data 
- An array of objects representing the original data to be filtered.
@param {Array} searchFields 
- An array of strings representing the fields in each object to be considered for searching.
@returns {Object} of
  @var {String} searchTerm representing the current search term.
  @var {String} filteredData representing the filtered data
  @function handleSearchTextChange for updating the search term.
*/

import { useEffect, useState } from "react";

export function useSearch(data, searchFields) {
  if (!Array.isArray(data) || !Array.isArray(searchFields)) {
    throw new Error(
      "Invalid input. Expected 'data' and 'searchFields' to be arrays."
    );
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      const itemValues = searchFields.map((field) => {
        return item[field].toLowerCase();
      });
      return itemValues.some((value) =>
        value.includes(searchTerm.toLowerCase())
      );
    });

    setFilteredData(filteredData);
  }, [data, searchTerm]);

  function handleSearchTextChange(text) {
    setSearchTerm(text);
  }

  return {
    searchTerm,
    filteredData,
    handleSearchTextChange,
  };
}
