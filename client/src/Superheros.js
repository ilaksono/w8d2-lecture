import React, { useState } from 'react';
import Superhero from './Superhero';
import './Superheros.scss';

export default function Superheros({superheros, loading}) {

  


  return (
    <>
      <h1>Superheros</h1>
      <ul className='superheros'>
      </ul>
    </>
  );
}
