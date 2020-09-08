import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useSuperheros from './hooks/useSuperheros';
import Superheros from './Superheros';
import Home from './Home';
import SuperheroPage from './SuperheroPage';

function App() {
  const {state} = useSuperheros();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path='/superheros'>
            <Superheros superheros={state.superheros} loading={state.loading} />
          </Route>

          <Route path='/superheros/:id'>
            <SuperheroPage superheros={state.superheros}/>
          </Route>

          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
