import React from 'react';
import useSuperHero from './hooks/useSuperHero';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Superhero({ id, name, image }) {
  const { path } = useRouteMatch();

  return (
    <>
      <li>
        <img src={image.url} alt={name} />{' '}
        <Link to={`${path}/${id}`}>{name}</Link>
      </li>
    </>
  );
}
