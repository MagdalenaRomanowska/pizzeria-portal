import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const PageNav = props => (
  <nav>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>ListForToday</NavLink>
  </nav>
);

PageNav.propTypes = {
  children: PropTypes.node,
};

export default PageNav;
