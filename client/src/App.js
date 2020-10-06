import React from 'react';
import StateContext from './context/StateContext';
import DispatchContext from './context/DispatchContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import useSuperheros from './hooks/useSuperheros';
import Superheros from './Superheros';
import Home from './Home';
import SuperheroPage from './SuperheroPage';
import Login from './Login';
import { ADD_SUPERHERO } from './reducers/dataReducer';

function App() {
  const { state, dispatch } = useSuperheros();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <StateContext.Provider value={state}>
          <DispatchContext.Provider value={dispatch}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/superheros">
                <Superheros />
              </Route>

              <Route path="/superheros/:id">
                <SuperheroPage superheros={state.superheros} />
              </Route>

              <Route path="/search">
                <Search />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="*">
                <h3>404 - Not Found</h3>
              </Route>
            </Switch>
          </DispatchContext.Provider>
        </StateContext.Provider>
      </Router>
    </div>
  );
}

export default App;
