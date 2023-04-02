import React from 'react';
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'
const Header = () => {
  return( 
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {}
        < a href='#'>
          <img src={logo} alt=''/>
        </a>
        {}
        <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer '>
        <button className='btn btn-sm'>work with me</button>
        </Link>
        </div>
    </div>
  </header>
  );
};

export default Header;
