import React from 'react';
import styles from './BookingDetails.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {bookingNumber: window.location.pathname.replace('/panel/tables/booking/', ''), tableNumber: '1, 2, 3', duration: '1', onlineOrderNumber: '', people: '3', hours: '22:00', starters: 'lemonWater', payment: 'locally, after meal'},
];

const BookingDetails = () => (
  <Paper className={styles.component}>
    <h2>BookingDetails view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Booking <br></br>Number</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Hour</TableCell>
          <TableCell>Table Number <br></br>/ Online Order <br></br>Number</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>People</TableCell>
          <TableCell>Starters</TableCell>
          <TableCell>Payment</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.tableNumber}>
            <TableCell>
              {row.bookingNumber}
            </TableCell>
            <TableCell>
              Date
            </TableCell>
            <TableCell>
              {row.hours}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.tableNumber}{row.onlineOrderNumber}
            </TableCell>
            <TableCell>
              {row.duration}
            </TableCell>
            <TableCell>
              {row.people}
            </TableCell>
            <TableCell>
              {row.starters}
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

export default BookingDetails;
