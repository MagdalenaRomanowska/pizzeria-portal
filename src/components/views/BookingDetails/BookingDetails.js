import React from 'react';
import styles from './BookingDetails.module.scss';

const BookingDetails = () => (
  <div className={styles.component}>
    <h2>BookingDetails view</h2>
    <h2>id: {window.location.pathname.replace('/panel/tables/booking/', '')}</h2>
  </div>
);

export default BookingDetails;
