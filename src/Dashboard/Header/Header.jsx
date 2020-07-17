import React from 'react';
import './Header.scss';
import {TiChartBarOutline} from 'react-icons/ti';
import {BsFillPersonFill} from 'react-icons/bs';

 function Header() {
  return (
    <div className='header'>
      <div className='header__logo'><TiChartBarOutline /></div>
      <div className='header__text'>richmarket</div>
      <div className='header__person'><BsFillPersonFill/></div>
      <div className='header__user'>katua</div>
    </div>
  )
};

export default Header;;
