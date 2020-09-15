import React from 'react';
import {Link} from 'react-router-dom';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styles from './Dashboard.module.scss';

const Dashboard = () => (
  <BrowserRouter basename={'/'}>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/ordering/today'}/>
      <Route exact path={process.env.PUBLIC_URL + '/ordering/todayOnline'}/>
      <Route exact path={process.env.PUBLIC_URL + '/ordering/todayLocal'}/>
      <Route exact path={process.env.PUBLIC_URL + '/listForToday/orders'}/>
      <Route exact path={process.env.PUBLIC_URL + '/listForToday/events'}/>
    </Switch>
    <div className={styles.component}>
      <h2>Dashboard view</h2>
      <Link to={`${process.env.PUBLIC_URL}/ordering/today`} className={styles.list} activeClassName='active'>Today ordering (all)</Link><br></br>
      <Link to={`${process.env.PUBLIC_URL}/ordering/todayOnline`} className={styles.list} activeClassName='active'>Today online ordering </Link><br></br>
      <Link to={`${process.env.PUBLIC_URL}/ordering/todayLocal`} className={styles.list} activeClassName='active'>Today local ordering </Link><br></br>
      <Link to={`${process.env.PUBLIC_URL}/listForToday/orders`} className={styles.list} activeClassName='active'>Order list for today</Link><br></br>
      <Link to={`${process.env.PUBLIC_URL}/listForToday/events`} className={styles.list} activeClassName='active'>Event list for today </Link><br></br>
    </div>
  </BrowserRouter>

);

export default Dashboard;
