import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useSuperheros from './hooks/useSuperheros';
import Superheros from './Superheros';
import Home from './Home';
import SuperheroPage from './SuperheroPage';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import HerosContext from './HerosContext';

function App() {
  const { state } = useSuperheros();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/superheros">
            <HerosContext.Provider value={state.superheros}>
              <Superheros loading={state.loading} />
            </HerosContext.Provider> 
          </PrivateRoute>

          <Route path="/superheros/:id">
            <SuperheroPage superheros={state.superheros} />
          </Route>

          <PrivateRoute path="/search">
            <Search />
          </PrivateRoute>

          <Route path="*">
            <h1>404 - Path not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
