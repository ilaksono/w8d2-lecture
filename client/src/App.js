import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import useSuperheros from './hooks/useSuperheros';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Superheros from './Superheros';
import Home from './Home';
import SuperheroPage from './SuperheroPage';
import Login from './Login';
import Superhero from './Superhero';
import StateContext from './StateContext';
import DispatchContext from './DispatchContext';

function App() {
  const { state, dispatch } = useSuperheros();

  return (
    <div className="App">
      <Router>
        <DispatchContext.Provider value={dispatch}>
          <StateContext.Provider value={state}>
            <Navbar />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/superheros/:id">
                <SuperheroPage superheros={state.superheros} />
              </Route>

              <Route path="/superheros">
                <Superheros />
              </Route>

              <Route path="/search">
                <Search />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="*">
                <h1>404 - Not Found</h1>
              </Route>
            </Switch>
          </StateContext.Provider>
        </DispatchContext.Provider>
      </Router>
    </div>
  );
}

export default App;
