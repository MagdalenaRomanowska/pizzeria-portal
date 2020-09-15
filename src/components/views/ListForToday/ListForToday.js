import React from 'react';
import {Link} from 'react-router-dom';
import styles from './ListForToday.module.scss';

const ListForToday = () => (
  <div className={styles.component}>
    <h2>ListForToday (reservations and events) view</h2>
    <Link to={`/panel/listForToday/orders`} className={styles.list}>Orders for today</Link>
    <Link to={`/panel/listForToday/events`} className={styles.list}>Events for today </Link>
  </div>
);

export default ListForToday;

//- lista rezerwacji i eventów zaplanowaych na dzisiaj.
