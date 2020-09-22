import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Dashboard.module.scss';
import Button from '@material-ui/core/Button';

const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard view</h2>
    <Button component ={Link} to={`${process.env.PUBLIC_URL}/dashboard/ordering`} className={styles.list} activeclassname='active'>Ordering for today</Button><br></br>
    <Button component ={Link} to={`${process.env.PUBLIC_URL}/dashboard/listForToday`} className={styles.list} activeclassname='active'>List of bookings and events for today</Button><br></br>
  </div>
);

export default Dashboard;
