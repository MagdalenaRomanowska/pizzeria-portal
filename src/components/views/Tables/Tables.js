import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <h2>id: {window.location.pathname}</h2>
    <Link to={`/panel/tables/booking/4`} className={styles.list}>Booking details 4</Link>
    <Link to={`/panel/tables/booking/5`} className={styles.list}>Booking details 5</Link>
    <Link to={`/panel/tables/booking/new`} className={styles.list}>New bookings </Link>
    <Link to={`/panel/tables/events/:id`} className={styles.list}>Event details </Link>
    <Link to={`/panel/tables/events/new`} className={styles.list}>New events </Link>
  </div>
);

export default Tables;
