import React, { useState, useEffect, useContext } from 'react';
import useSearch from './hooks/useSearch';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import './Search.scss';
import { ADD_SUPERHERO } from './reducers/dataReducer';
import DispatchContext from './context/DispatchContext';

export default function Search() {

  const dispatch = useContext(DispatchContext);

  const [searchContent, setSearchContent] = useState('');
  // history
  const history = useHistory();

  const { path } = useRouteMatch();

  // Extract and parse query string (useLocation, queryString.parse )

  const { search } = useLocation();

  const { name } = queryString.parse(search);

  const SearchResult = ({ name }) => {
    // using the custom hook to get the data
    const { heroDetails, loading, error } = useSearch(name);

    console.log("QueryAPI");

    if (loading) {
      return <h3>Loading...</h3>
    }


    return (
      <div>
        <h3>Search for: {name}</h3>

        {/* ouput herosDetails.results if herosDetails */}

        <div className="search-result">
          <ul>
            {heroDetails && heroDetails.results.map(hero => <li>{hero.name}<button onClick={()=> dispatch({type: ADD_SUPERHERO, superhero: hero})}>Add To List</button></li>)}
          </ul>
        </div>

      </div>
    );
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    // push to history the query string
    // Redirect
    history.push(`${path}?name=${searchContent}`)

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
