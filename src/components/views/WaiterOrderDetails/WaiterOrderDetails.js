import React from 'react';
import {Link} from 'react-router-dom';
import styles from './WaiterOrderDetails.module.scss';

const WaiterOrderDetails = () => (
  <div className={styles.component}>
    <h2>WaiterOrderDetails view</h2>
    <h2>id: {window.location.pathname.replace('/panel/waiter/order/', '')}</h2>
    <Link to={`/panel/waiter/order/1`} className={styles.list}>Waiter order details Sample 1</Link>
    <Link to={`/panel/waiter/order/2`} className={styles.list}>Waiter order details Sample 2</Link>
  </div>
);

export default WaiterOrderDetails;
