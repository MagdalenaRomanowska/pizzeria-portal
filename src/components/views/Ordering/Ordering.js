import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Ordering.module.scss';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering for today view</h2>
    <h2>id: </h2>
    <Link to={`/panel/ordering/new`} className={styles.list}>New ordering (all)</Link>
    <Link to={`/panel/ordering/newOnline`} className={styles.list}>New online ordering </Link>
    <Link to={`/panel/ordering/newLocal`} className={styles.list}>New local ordering </Link>
    <Link to={`/panel/ordering/order/:id`} className={styles.list}>Order number</Link>
  </div>
);

export default Ordering;
