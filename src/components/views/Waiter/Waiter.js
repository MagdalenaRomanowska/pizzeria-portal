import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link exact to={`${process.env.PUBLIC_URL}/waiter/order/`} className={styles.list} activeClassName='active'>Waiter Order Details </Link><br></br>
    <Link exact to={`${process.env.PUBLIC_URL}/waiter/orders/new`} className={styles.list} activeClassName='active'>Waiter - New Order</Link><br></br>
  </div>
);

export default Waiter;
