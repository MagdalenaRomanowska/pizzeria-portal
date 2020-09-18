import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Ordering.module.scss';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering for today view</h2>
    <Link to={`/panel/dashboard/ordering/new`} className={styles.list} activeclassname='active'>New ordering</Link><br></br>
    <Link to={`/panel/dashboard/ordering/order/1`} className={styles.list} activeclassname='active'>Ordering details sample 1</Link><br></br>
    <Link to={`/panel/dashboard/ordering/order/2`} className={styles.list} activeclassname='active'>Ordering details sample 2</Link><br></br>
    <Link to={`/panel/dashboard/ordering/order/3`} className={styles.list} activeclassname='active'>Ordering details sample 3</Link>
  </div>
);

export default Ordering;
