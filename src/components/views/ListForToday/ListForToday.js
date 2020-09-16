import React from 'react';
import {Link} from 'react-router-dom';
import styles from './ListForToday.module.scss';

const ListForToday = () => (
  <div className={styles.component}>
    <h2>ListForToday (bookings and events) view</h2>
    <Link exact to={`${process.env.PUBLIC_URL}/tables/booking/`} className={styles.list} activeClassName='active'>Booking Details </Link><br></br>
    <Link exact to={`${process.env.PUBLIC_URL}/tables/event/`} className={styles.list} activeClassName='active'>Event Details </Link><br></br>
  </div>
);

export default ListForToday;

//- lista rezerwacji i eventów zaplanowaych na dzisiaj.
