import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <header>
        <h2 className='logo'>EasyMCQ</h2>
        <nav>
          <ul className='nav__links'>
            <li>
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
