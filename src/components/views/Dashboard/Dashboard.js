import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Dashboard.module.scss';

const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard view</h2>
    <Link to={`${process.env.PUBLIC_URL}/dashboard/ordering`} className={styles.list} activeclassname='active'>Ordering for today</Link><br></br>
    <Link to={`${process.env.PUBLIC_URL}/dashboard/listForToday`} className={styles.list} activeclassname='active'>List of bookings and events for today</Link><br></br>
  </div>
);

export default Dashboard;
