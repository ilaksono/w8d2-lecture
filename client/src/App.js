import React, { useContext } from 'react';
import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import useSuperheros from './hooks/useSuperheros';
import Superheros from './Superheros';
import Home from './Home';
import SuperheroPage from './SuperheroPage';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Superhero from './Superhero';
import StateContext from './context/StateContext';
import DispatchContext from './context/DispatchContext';



function App() {
  const { state, dispatch } = useSuperheros();

  return (
    <div className="App">
      <Router>
        <StateContext.Provider value={state}>
          <DispatchContext.Provider value={dispatch}>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/superheros/:id'>
              <SuperheroPage superheros={state.superheros} />
            </Route>
            <Route path='/superheros'>
              <Superheros />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='*'>
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
