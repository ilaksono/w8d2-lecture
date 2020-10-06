import React, { useState, useEffect, useContext } from 'react';
import useSearch from './hooks/useSearch';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import './Search.scss';
import { ADD_SUPERHERO } from './reducers/dataReducer';
import DispatchContext from './context/DispatchContext';

export default function Search() {
  const [searchContent, setSearchContent] = useState('');
  const dispatch = useContext(DispatchContext);
  // history
  const history = useHistory();
  // Extract and parse query string (useLocation, queryString.parse )

  // Get the content of the query string
  const { search } = useLocation(); // "?name=batman" <- parse it
  // extract the name from the query string
  const { name } = queryString.parse(search);

  // extract the current path
  const { path } = useRouteMatch();

  const SearchResult = ({ name }) => {
    // using the custom hook to get the data
    const { heroDetails, loading, error } = useSearch(name);

    return (
      <div>
        <h3>Search for: {name}</h3>

        {/* output loading if loading */}
        {loading && <h3>Loading...</h3>}
        {/* ouput herosDetails.results if herosDetails */}

        <div className="search-result">
          <ul>
            {heroDetails &&
              heroDetails.results.map((hero) => (
                <li>
                  {hero.name}{' '}
                  <button
                    onClick={() =>
                      dispatch({ type: ADD_SUPERHERO, superhero: hero })
                    }
                  >
                    Add Hero
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // push to history the query string
    history.push(`${path}?name=${searchContent}`);
  };

  return (
    <>
      <h3>Search</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="search"
          value={searchContent}
          onChange={(event) => setSearchContent(event.target.value)}
        />

        <input type="submit" value="Search" />
      </form>

      {name && <SearchResult name={name} />}
    </>
  );
}
