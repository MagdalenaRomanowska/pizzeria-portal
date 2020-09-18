import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link exact to={`${process.env.PUBLIC_URL}/tables/bookings/new`} className={styles.list} activeclassname='active'>New booking</Link><br></br>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/4`} className={styles.list}>Booking 4 - details</Link><br></br>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/5`} className={styles.list}>Booking 5 - details</Link><br></br>
    <Link exact to={`${process.env.PUBLIC_URL}/tables/events/new`} className={styles.list} activeclassname='active'>New event</Link><br></br>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/1`} className={styles.list}>Event 1 - details</Link><br></br>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/2`} className={styles.list}>Event 2 - details</Link><br></br>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/3`} className={styles.list}>Event 3 - details</Link><br></br>
  </div>
);

export default Tables;
