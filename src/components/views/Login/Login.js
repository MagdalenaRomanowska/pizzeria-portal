import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => (
  <div className={styles.component}>
    <h2>Login view</h2>
    <Link to={`/panel/dashboard`} className={styles.list}>Submit </Link>
  </div>
);

export default Login;
