import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = (props) => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <h2>id: </h2>
    <Link to={`/panel/tables/booking/${props.id}`} className={styles.list}>Booking details </Link>
    <Link to={`/panel/tables/booking/new`} className={styles.list}>New bookings </Link>
    <Link to={`/panel/tables/events/:id`} className={styles.list}>Event details </Link>
    <Link to={`/panel/tables/events/new`} className={styles.list}>New events </Link>
  </div>
);

Tables.propTypes = {
  id: PropTypes.any,
};

export default Tables;
