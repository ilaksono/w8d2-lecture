import React, { useState } from 'react';
import Superhero from './Superhero';
import './Superheros.scss';
import HerosContext from './HerosContext';

export default function Superheros({ loading }) {


  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h1>Superheros</h1>
      <ul className="superheros">
        <HerosContext.Consumer>
          {(superheros) =>
            superheros.map((superhero) => (
              <Superhero key={superhero.id} {...superhero} />
            ))
          }
        </HerosContext.Consumer>
      </ul>
    </>
  );
}
