import React from 'react';
import {Link} from 'react-router-dom';
//import ListForToday from '../ListForToday/ListForToday';
//import Ordering from '../Ordering/Ordering';
import styles from './Dashboard.module.scss';

const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard view</h2>
    <Link exact to={`${process.env.PUBLIC_URL}/dashboard/ordering`} className={styles.list} activeClassName='active'>Ordering for today</Link><br></br>
    <Link exact to={`${process.env.PUBLIC_URL}/dashboard/listForToday`} className={styles.list} activeClassName='active'>List of bookings and events for today</Link><br></br>
  </div>
);

export default Dashboard;
