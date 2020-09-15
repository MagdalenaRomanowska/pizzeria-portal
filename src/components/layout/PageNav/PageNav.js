import React from 'react';
import {NavLink} from 'react-router-dom';

const PageNav = () => (
  <nav>
    <NavLink exact to={`${process.env.PUBLIC_URL}/home`} activeClassName='active'>Home </NavLink><br></br>
    <NavLink to={`${process.env.PUBLIC_URL}/listForToday`} activeClassName='active'>List for today </NavLink><br></br>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login </NavLink><br></br>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables </NavLink><br></br>
    <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>Ordering for today</NavLink><br></br>
    <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter </NavLink><br></br>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen </NavLink>
  </nav>
);

export default PageNav;
