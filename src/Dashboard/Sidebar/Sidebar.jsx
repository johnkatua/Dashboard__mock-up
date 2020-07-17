import React from 'react';
import './Sidebar.scss';
import {Link} from 'react-router-dom';
import {RiDashboardLine} from 'react-icons/ri';
import { useRouteMatch } from 'react-router-dom';

function Sidebar() {
  const match = useRouteMatch();  
  return (
    <div className='sidebar'>
      <ul className="sidebar__nav">
        <span className="sidebar__logo"><RiDashboardLine/></span>
        <Link to={`${match.path}`} className='sidebar__link'>Dashboard</Link>
      </ul>
      <ul className="sidebar__nav">
        <span className="sidebar__logo"><RiDashboardLine/></span>
        <Link to={`${match.path}/orders`} className='sidebar__link'>Orders</Link>
      </ul>
      <ul className="sidebar__nav">
        <span className="sidebar__logo"><RiDashboardLine/></span>
        <Link to={`${match.path}/sales`} className='sidebar__link'> Sales</Link>
      </ul>
      <ul className="sidebar__nav">
        <span className="sidebar__logo"><RiDashboardLine/></span>
        <Link to={`${match.path}/merchants`} className='sidebar__link'>Merchants</Link>
      </ul>
      <ul className="sidebar__nav">
        <span className="sidebar__logo"><RiDashboardLine/></span>
        <Link to={`${match.path}/products`} className='sidebar__link'>Product</Link>
      </ul>
    </div>
  )
};

export default Sidebar;
