import React from 'react';
import {NavLink} from 'react-router-dom';

const PageNav = () => (
  <nav><br></br>

    <NavLink exact to={`${process.env.PUBLIC_URL}/dashboard`} activeClassName='active'>Dashboard </NavLink><br></br>
    <NavLink exact to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login </NavLink><br></br>
    <NavLink exact to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables </NavLink><br></br>
    <NavLink exact to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter </NavLink><br></br>
    <NavLink exact to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen </NavLink>
  </nav>
);

export default PageNav;
