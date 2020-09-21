import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Ordering.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {order: '123', tableNumber: '1', onlineOrderNumber: '', dishes: 'dinner set no.1', amount: 3},
  {order: '234', tableNumber: '2', onlineOrderNumber: '', dishes: 'dinner set no.2', amount: 2},
  {order: '345', tableNumber: '', onlineOrderNumber: 'online 1', dishes: 'dinner set no.3', amount: 4},
];

const renderActions = order => {
  switch (order) {
    case '123':
      return (
        <>
          <Button component={Link} to={`/panel/dashboard/ordering/order/123`} className={styles.list} activeclassname='active'>Order 123 details</Button>
        </>
      );
    case '234':
      return (
        <Button component={Link} to={`/panel/dashboard/ordering/order/234`} className={styles.list} activeclassname='active'>Order 234 details</Button>
      );
    case '345':
      return (
        <Button component={Link} to={`/panel/dashboard/ordering/order/345`} className={styles.list} activeclassname='active'>Order 345 details</Button>
      );
    default:
      return null;
  }
};

const Ordering = () => (
  <Paper className={styles.component}>
    <h2>Ordering For Today view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><b>Order or <br></br>Booking/Event<br></br> Number</b></TableCell>
          <TableCell><b>Table Number <br></br>/ Online Order <br></br>Number</b></TableCell>
          <TableCell><b>Ordered <br></br>Dishes</b></TableCell>
          <TableCell><b>Dishes <br></br>Amount</b></TableCell>
          <TableCell><b>Details</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.order}>
            <TableCell component="th" scope="row">
              {row.order}
            </TableCell>
            <TableCell>
              {row.tableNumber}{row.onlineOrderNumber}
            </TableCell>
            <TableCell>
              {row.dishes}
            </TableCell>
            <TableCell>
              {row.amount}
            </TableCell>
            <TableCell>
              {renderActions(row.order)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Button component={Link} to={`/panel/dashboard/ordering/new`} className={styles.list} activeclassname='active'>New ordering</Button>
  </Paper>
);

export default Ordering;
