import React from 'react';
import {Link} from 'react-router-dom';
import styles from './ListForToday.module.scss';

const ListForToday = () => (
  <div className={styles.component}>
    <h2>ListForToday (bookings and events) view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/4`} className={styles.list}>Booking 4 - details</Link><br></br>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/5`} className={styles.list}>Booking 5 - details</Link><br></br>
    <Link to={`/panel/tables/event/1`} className={styles.list}>Event 1 - details</Link><br></br>
    <Link to={`/panel/tables/event/2`} className={styles.list}>Event 2 - details</Link><br></br>
    <Link to={`/panel/tables/event/3`} className={styles.list}>Event 3 - details</Link><br></br>
  </div>
);

export default ListForToday;

//- lista rezerwacji i eventów zaplanowaych na dzisiaj.
