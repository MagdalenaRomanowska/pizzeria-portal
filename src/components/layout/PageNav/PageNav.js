import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';

const PageNav = () => (
  <nav className={styles.component}><br></br>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/dashboard`} activeclassname='active'>Dashboard </Button><br></br>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/login`} activeclassname='active'>Login </Button><br></br>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/tables`} activeclassname='active'>Tables </Button><br></br>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/waiter`} activeclassname='active'>Waiter </Button><br></br>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/kitchen`} activeclassname='active'>Kitchen </Button>
  </nav>
);

export default PageNav;
