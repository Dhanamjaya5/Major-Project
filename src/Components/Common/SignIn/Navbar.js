import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h2 className='logo' onClick={() => navigate('/')}>
          EasyMCQ
        </h2>
        <nav>
          <ul className='nav__links'>
            <li>
              <a href='#' onClick={() => navigate('/input')}>
                MCQGenerator
              </a>
            </li>
            <li>
              <a href='#'>Team</a>
            </li>
          </ul>
        </nav>
        {/* <a className='cta' href='#'>
          <button className='NavBtn'>signIn</button>
        </a> */}
      </header>
    </div>
  );
}

export default Navbar;
