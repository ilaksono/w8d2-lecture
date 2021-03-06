import React, { useState, useContext } from 'react';
import Superhero from './Superhero';
import './Superheros.scss';
import StateContext from './StateContext';

export default function Superheros() {

  const state = useContext(StateContext);

  if (state.loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h1>Superheros</h1>
      <ul className="superheros">
        {state.superheros.map((hero) => (
          <Superhero id={hero.id} name={hero.name} image={hero.image} />
        ))}
      </ul>
    </>
  );
}
