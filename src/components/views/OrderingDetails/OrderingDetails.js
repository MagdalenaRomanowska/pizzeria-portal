import React from 'react';
import {Link} from 'react-router-dom';
import styles from './OrderingDetails.module.scss';

const OrderingDetails = () => (
  <div className={styles.component}>
    <h2>OrderingDetails view</h2>
    <h2>id: {window.location.pathname.replace('/panel/dashboard/ordering/order/', '')}</h2>
    <Link to={`/panel/dashboard/ordering/order/1`} className={styles.list}>Ordering details sample 1</Link>
    <Link to={`/panel/dashboard/ordering/order/2`} className={styles.list}>Ordering details sample 2</Link>
    <Link to={`/panel/dashboard/ordering/order/3`} className={styles.list}>Ordering details sample 3</Link>
  </div>
);

export default OrderingDetails;
