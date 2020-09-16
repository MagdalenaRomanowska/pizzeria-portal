import React from 'react';
import {Link} from 'react-router-dom';
import styles from './BookingDetails.module.scss';

const BookingDetails = () => (
  <div className={styles.component}>
    <h2>BookingDetails view</h2>
    <h2>id: {window.location.pathname.replace('/panel/tables/booking/', '')}</h2>
    <Link to={`/panel/tables/booking/4`} className={styles.list}>Booking details 4</Link>
    <Link to={`/panel/tables/booking/5`} className={styles.list}>Booking details 5</Link>
  </div>
);

export default BookingDetails;
