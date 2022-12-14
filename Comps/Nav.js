import React from 'react';

export default function Nav() {
  return (
    <div>
      <div className='scroll-up-btn'>
        <i className='fas fa-angle-up'></i>
      </div>
      <nav className='navbar'>
        <div className='max-width'>
          <div className='logo'>
            <a href='#'>
              <span>SHASHANK</span>
            </a>
          </div>
          <ul className='menu'>
            <li>
              <a href='/#home' className='menu-btn'>
                Home
              </a>
            </li>
            <li>
              <a href='/#about' className='menu-btn'>
                About
              </a>
            </li>
            <li>
              <a href='/#info' className='menu-btn'>
                Info
              </a>
            </li>
            <li>
              <a href='/#skills' className='menu-btn'>
                Skills
              </a>
            </li>
            <li>
              <a href='/#project' className='menu-btn'>
                Project
              </a>
            </li>

            <li>
              <a href='/#connect' className='menu-btn'>
                Connect
              </a>
            </li>
          </ul>
          <div className='menu-btn'>
            <i className='fas fa-bars'></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
