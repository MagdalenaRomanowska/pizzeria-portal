import React from 'react';
import styles from './BookingNew.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {hour: '10:00-10:30', status: 'orderButton'},
  {hour: '10:30-11:00', status: 'orderButton'},
  {hour: '11:00-11:30', status: 'orderButton'},
  {hour: '11:30-12:00', status: 'orderButton'},
  {hour: '12:00-12:30', status: 'orderButton'},
  {hour: '12:30-13:00', status: 'orderButton'},
  {hour: '13:00-13:30', status: 'orderButton'},
  {hour: '13:30-14:00', status: 'orderButton'},
  {hour: '14:00-14:30', status: 'orderButton'},
  {hour: '14:30-15:00', status: 'orderButton'},
  {hour: '15:00-15:30', status: 'orderButton'},
  {hour: '15:30-16:00', status: 'orderButton'},
  {hour: '16:00-16:30', status: 'orderButton'},
  {hour: '16:30-17:00', status: 'orderButton'},
  {hour: '17:00-17:30', status: 'orderButton'},
  {hour: '17:30-18:00', status: 'orderButton'},
  {hour: '18:00-18:30', status: 'orderButton'},
  {hour: '18:30-19:00', status: 'orderButton'},
  {hour: '19:00-19:30', status: 'orderButton'},
  {hour: '19:30-20:00', status: 'orderButton'},
  {hour: '20:00-20:30', status: 'orderButton'},
  {hour: '20:30-21:00', status: 'orderButton'},
  {hour: '21:00-21:30', status: 'orderButton'},
  {hour: '21:30-22:00', status: 'orderButton'},
  {hour: '22:00-22:30', status: 'orderButton'},
  {hour: '22:30-23:00', status: 'orderButton'},
  {hour: '23:00-23:30', status: 'orderButton'},
  {hour: '23:30-00:00', status: 'orderButton'},
];

const renderActions = () => {
  return (
    <Button>Click to book</Button>
  );
};

const BookingNew = () => (
  <Paper className={styles.component}>
    <h2>BookingNew view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table 1</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.hour}>
            <TableCell component="th" scope="row">
              {row.hour}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
            <TableCell>
            </TableCell>
            <TableCell>
              {row.hour}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
            <TableCell>
            </TableCell>
            <TableCell>
              {row.hour}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default BookingNew;

