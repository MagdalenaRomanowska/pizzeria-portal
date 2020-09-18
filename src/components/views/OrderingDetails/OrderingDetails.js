import React from 'react';
import styles from './OrderingDetails.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {tableNumber: '1', onlineOrderNumber: '', dishes: 'dinner set no.1', amount: '3', people: '3', hours: '12:30-14:00', payment: 'locally, after meal'},
];

const OrderingDetails = () => (
  <Paper className={styles.component}>
    <h2>OrderingDetails view</h2>
    <h2>Order or Booking / Event Number: {window.location.pathname.replace('/panel/dashboard/ordering/order/', '')}</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table Number <br></br>/ Online Order <br></br>Number</TableCell>
          <TableCell>Ordered <br></br>Dishes</TableCell>
          <TableCell>Dishes <br></br>Amount</TableCell>
          <TableCell>People</TableCell>
          <TableCell>Hours</TableCell>
          <TableCell>Payment</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.tableNumber}>
            <TableCell component="th" scope="row">
              {row.tableNumber}{row.onlineOrderNumber}
            </TableCell>
            <TableCell>
              {row.dishes}
            </TableCell>
            <TableCell>
              {row.amount}
            </TableCell>
            <TableCell>
              {row.people}
            </TableCell>
            <TableCell>
              {row.hours}
            </TableCell>
            <TableCell>
              {row.payment}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

// const OrderingDetails = () => (
//   <div className={styles.component}>
//     <h2>OrderingDetails view</h2>
//     <h2>id: {window.location.pathname.replace('/panel/dashboard/ordering/order/', '')}</h2>
//   </div>
// );

export default OrderingDetails;
