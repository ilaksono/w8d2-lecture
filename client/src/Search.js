import React, { useState, useEffect } from 'react';
import useSearch from './hooks/useSearch';
import { useLocation, useRouteMatch, Redirect } from 'react-router-dom';
import queryString from 'query-string';

export default function Search() {
  const [searchContent, setSearchContent] = useState('');
  const [redirectSearch, setRedirectSearch] = useState(false);
  const { path } = useRouteMatch();

    const { search } = useLocation();
    const { name } = queryString.parse(search);
    const { response: heroDetails, loading, error } = useSearch(name);

    console.log("name",name)

    useEffect(()=> {
      if (!name) {
        setRedirectSearch(false)
        setSearchContent('');
      }

    }, [name])




  const handleSubmit = (event) => {
    event.preventDefault();
    setRedirectSearch(true);
  };

  if (redirectSearch) {
    console.log("Redirect")
    return <Redirect to={`${path}?name=${searchContent}`} />;
  }

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
    </>
  );
}
