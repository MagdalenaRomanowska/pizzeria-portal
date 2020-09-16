import React from 'react';
import {Link} from 'react-router-dom';
import styles from './EventDetails.module.scss';

const EventDetails = () => (
  <div className={styles.component}>
    <h2>EventDetails view</h2>
    <h2>id: {window.location.pathname.replace('/panel/tables/event/', '')}</h2>
    <Link to={`/panel/tables/event/1`} className={styles.list}>Event details 1</Link>
    <Link to={`/panel/tables/event/2`} className={styles.list}>Event details 2</Link>
    <Link to={`/panel/tables/event/3`} className={styles.list}>Event details 3</Link>
    <Link to={`/panel/tables/event/4`} className={styles.list}>Event details 4</Link>
    <Link to={`/panel/tables/event/5`} className={styles.list}>Event details 5</Link>
  </div>
);

export default EventDetails;
