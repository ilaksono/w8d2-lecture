import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import useSuperheros from './hooks/useSuperheros';
import Superheros from './Superheros';
import Home from './Home';
import SuperheroPage from './SuperheroPage';
import Login from './Login';

function App() {
  const { state } = useSuperheros();

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
