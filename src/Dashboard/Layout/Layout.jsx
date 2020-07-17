import React from 'react';
import './Layout.scss';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';



const Layout = (props) =>{
  return (
    <div className='layout'>
      <div className='layout__header'><Header/></div>
      <div className='main'>
        <div className='main__sidebar'><Sidebar/></div>
        <div className='main__content'>{props.children}</div>
      </div>
    </div>
  )
};

export default Layout;
