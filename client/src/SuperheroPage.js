import React from 'react';
import { useParams } from 'react-router-dom';
import './SuperheroPage.scss';

export default function SuperheroPage({ superheros }) {

    // find the superhero with the corresponding id

    // extract the urlParameter with useParams

    

  return (
    <>
      {'superhero' && (
        <div>
          <h1>name</h1>

          <div className="hero-details">
            <div className="avatar-image">
              <img src={null} alt={null} />
            </div>
            <div className="description">
              <h2>Power Stats</h2>

              <ul className='powerstats'>
                <li>Combat: </li>
                <li>Intelligence: </li>
                <li>Strength: </li>
                <li>speed: </li>
                <li>Durability:</li>
                <li>Power: </li>
                <li>Combat: </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
