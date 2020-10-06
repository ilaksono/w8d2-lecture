import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  const { state } = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    // save token to local storage to simulate that the users logs in
    // A real server authentication would still need to be done
    localStorage.setItem('token', '1bc123');

    // Redirect to the source url or home page
    history.push((state && state.from) || '/');
  };

  return (
    <>
      <h1>Please Login</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />

        <input type="submit" value="Login" />
      </form>
    </>
  );
}
