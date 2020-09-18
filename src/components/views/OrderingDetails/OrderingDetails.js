import React from 'react';
import styles from './OrderingDetails.module.scss';

const OrderingDetails = () => (
  <div className={styles.component}>
    <h2>OrderingDetails view</h2>
    <h2>id: {window.location.pathname.replace('/panel/dashboard/ordering/order/', '')}</h2>
  </div>
);

export default OrderingDetails;
