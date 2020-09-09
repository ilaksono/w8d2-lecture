import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>

      <div>
        Super Hero API
      </div>

      <ul className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/superheros'>Superheros</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>

    </nav>
  );
}
