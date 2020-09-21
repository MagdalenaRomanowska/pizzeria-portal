import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './ListForToday.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {bookingOrEventNumber: 'booking 4', tableNumber: '2', onlineOrderNumber: '', people: '3', hours: '22:00-23:00', payment: 'locally, after meal'},
  {bookingOrEventNumber: 'booking 5', tableNumber: '2', onlineOrderNumber: '', people: '3', hours: '23:00-00:00', payment: 'locally, after meal'},
  {bookingOrEventNumber: 'event 1', tableNumber: '1', onlineOrderNumber: '', people: '3', hours: '13:30-17:30', payment: 'locally, after meal'},
  {bookingOrEventNumber: 'event 2', tableNumber: '3', onlineOrderNumber: '', people: '3', hours: '16:00-18:00', payment: 'locally, after meal'},
  {bookingOrEventNumber: 'event 3', tableNumber: '3', onlineOrderNumber: '', people: '3', hours: '12:00-14:00', payment: 'locally, after meal'},
  {bookingOrEventNumber: 'event 4', tableNumber: '2', onlineOrderNumber: '', people: '3', hours: '13:00-17:00', payment: 'locally, after meal'},
  {bookingOrEventNumber: 'event 5', tableNumber: '2', onlineOrderNumber: '', people: '3', hours: '18:00-20:00', payment: 'locally, after meal'},
];

const renderActions = bookingOrEventNumber => {
  switch (bookingOrEventNumber) {
    case 'booking 4':
      return (
        <>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/4`} className={styles.list} activeclassname='active'>Booking 4 - details</Button>
        </>
      );
    case 'booking 5':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/5`} className={styles.list} activeclassname='active'>Booking 5 - details</Button>
      );
    case 'event 1':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/1`} className={styles.list} activeclassname='active'>Event 1 - details</Button>
      );
    case 'event 2':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/2`} className={styles.list} activeclassname='active'>Event 2 - details</Button>
      );
    case 'event 3':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/3`} className={styles.list} activeclassname='active'>Event 3 - details</Button>
      );
    case 'event 4':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/4`} className={styles.list} activeclassname='active'>Event 4 - details</Button>
      );
    case 'event 5':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/5`} className={styles.list} activeclassname='active'>Event 5 - details</Button>
      );
    default:
      return null;
  }
};

const ListForToday = () => (
  <Paper className={styles.component}>
    <h2>ListForToday view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Booking <br></br>/ Event Number</TableCell>
          <TableCell>Table Number <br></br>/ Online Order <br></br>Number</TableCell>
          <TableCell>People</TableCell>
          <TableCell>Hours</TableCell>
          <TableCell>Payment</TableCell>
          <TableCell>Details</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.bookingOrEventNumber}>
            <TableCell component="th" scope="row">
              {row.bookingOrEventNumber}
            </TableCell>
            <TableCell>
              {row.tableNumber}{row.onlineOrderNumber}
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
            <TableCell>
              {renderActions(row.bookingOrEventNumber)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default ListForToday;
