import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h2 className='logo' onClick={() => navigate('input')}>
          EasyMCQ
        </h2>
        <nav>
          <ul className='nav__links'>
            <li onClick={() => navigate('input')}>
              <a href='#'>MCQGenerator</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
          </ul>
        </nav>
        <a className='cta' href='#'>
          <button className='NavBtn'>signIn</button>
        </a>
      </header>
    </div>
  );
}

export default Navbar;
