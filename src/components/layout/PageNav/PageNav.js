import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';

const PageNav = () => (
  <nav><br></br>

    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/dashboard`} activeClassName='active'>Dashboard </Button><br></br>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login </Button><br></br>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables </Button><br></br>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter </Button><br></br>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen </Button>
  </nav>
);

export default PageNav;
