import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <h2>id: </h2>
    <Link to={`/panel/waiter/order/new`} className={styles.list}>New orders </Link>
    <Link to={`/panel/waiter/order/:id`} className={styles.list}>Order details </Link>
  </div>
);

export default Waiter;
