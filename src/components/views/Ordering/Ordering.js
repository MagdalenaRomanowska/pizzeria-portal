import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Ordering.module.scss';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering for today view</h2>
    <Link to={`/panel/dashboard/ordering/new`} className={styles.list}>New ordering</Link>
    <Link to={`/panel/dashboard/ordering/order/`} className={styles.list}>Ordering details</Link>
  </div>
);

export default Ordering;
