import React from 'react';
import styles from './EventDetails.module.scss';

const EventDetails = () => (
  <div className={styles.component}>
    <h2>EventDetails view</h2>
    <h2>id: {window.location.pathname.replace('/panel/tables/event/', '')}</h2>
  </div>
);

export default EventDetails;
