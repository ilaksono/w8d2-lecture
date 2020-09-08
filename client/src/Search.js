import React, { useState, useEffect } from 'react';
import useSearch from './hooks/useSearch';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import './Search.scss';

export default function Search() {
  const [searchContent, setSearchContent] = useState('');
  
  const SearchResult = ({ name }) => {
    // using the custom hook to get the data
    const { heroDetails, loading, error } = useSearch(name);

    // history

    // Extract and parse query string (useLocation, queryString.parse )

    return (
      <div>
        <h3>Search for: {name}</h3>

        {/* output loading if loading */}

        {/* ouput herosDetails.results if herosDetails */}

        <div className="search-result">
            <ul>
            </ul>
          </div>

      </div>
    );
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    // push to history the query string

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="search"
          value={searchContent}
          onChange={(event) => setSearchContent(event.target.value)}
        />

        <input type="submit" value="Search" />
      </form>

      {/* {name && <SearchResult name={name} />} */}
    </>
  );
}
