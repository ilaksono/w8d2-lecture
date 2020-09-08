import React, { useState } from 'react';
import Superhero from './Superhero';
import './Superheros.scss';

export default function Superheros({superheros, loading}) {

  const superheroList = superheros.map((superhero) => (
    <Superhero key={superhero.id} {...superhero} />
  ));

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <h1>Superheros</h1>
      <ul className='superheros'>
        {superheroList}
      </ul>
    </>
  );
}
