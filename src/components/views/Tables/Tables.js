import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link exact to={`${process.env.PUBLIC_URL}/tables/booking/`} className={styles.list} activeClassName='active'>Booking Details </Link><br></br>
    <Link exact to={`${process.env.PUBLIC_URL}/tables/bookings/new`} className={styles.list} activeClassName='active'>New booking</Link><br></br>
    <Link exact to={`${process.env.PUBLIC_URL}/tables/event/`} className={styles.list} activeClassName='active'>Event Details </Link><br></br>
    <Link exact to={`${process.env.PUBLIC_URL}/tables/events/new`} className={styles.list} activeClassName='active'>New event</Link><br></br>
  </div>
);

export default Tables;
