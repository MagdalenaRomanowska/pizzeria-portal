import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/orders/new`} className={styles.list} activeclassname='active'>Waiter - New Order</Link><br></br>
    <Link to={`/panel/waiter/order/1`} className={styles.list}>Waiter order details Sample 1</Link><br></br>
    <Link to={`/panel/waiter/order/2`} className={styles.list}>Waiter order details Sample 2</Link>
  </div>
);

export default Waiter;
