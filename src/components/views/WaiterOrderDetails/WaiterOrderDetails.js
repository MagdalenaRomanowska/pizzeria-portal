import React from 'react';
import styles from './WaiterOrderDetails.module.scss';

const WaiterOrderDetails = () => (
  <div className={styles.component}>
    <h2>WaiterOrderDetails view</h2>
    <h2>id: {window.location.pathname.replace('/panel/waiter/order/', '')}</h2>
  </div>
);

export default WaiterOrderDetails;
