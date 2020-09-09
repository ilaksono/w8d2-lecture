import React, { useState, useEffect, useContext } from 'react';
import useSearch from './hooks/useSearch';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import './Search.scss';
import DispatchContext from './DispatchContext';
import { ADD_SUPERHERO } from './reducers/dataReducer';

export default function Search() {
  const [searchContent, setSearchContent] = useState('');

  // access to dispatch from provider
  const dispatch = useContext(DispatchContext);

  // history
  const history = useHistory();

  const { path } = useRouteMatch();

  // extraction the query string from the url => name=batman
  const { search } = useLocation();
  const { name } = queryString.parse(search);


  const SearchResult = ({ name }) => {
    // using the custom hook to get the data
    const { heroDetails, loading, error } = useSearch(name);

    // Extract and parse query string (useLocation, queryString.parse )

    return (
      <div>
        <h3>Search for: {name}</h3>
        {/* output loading if loading */}
        {loading && <h3>Loading ...</h3>}

        {/* ouput herosDetails.results if herosDetails */}
        <div className="search-result">
          <ul>
            {heroDetails &&
              heroDetails.results.map((hero) => <li key={hero.id}>{hero.name} <button onClick={() => dispatch({type: ADD_SUPERHERO, superhero: hero})}>Add to List</button></li>)}
          </ul>
        </div>
      </div>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // push to history the query string
    // redirect => a bit imperative
    history.push(`${path}?name=${searchContent}`);
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

      {name && <SearchResult name={name} />}
    </>
  );
}
