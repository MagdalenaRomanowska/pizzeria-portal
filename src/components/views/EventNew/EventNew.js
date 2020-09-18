import React from 'react';
import styles from './EventNew.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '10:00-10:30', status: 'orderButton'},
  {id: '10:30-11:00', status: 'orderButton'},
  {id: '11:00-11:30', status: 'orderButton'},
  {id: '11:30-12:00', status: 'orderButton'},
  {id: '12:00-12:30', status: 'orderButton'},
  {id: '12:30-13:00', status: 'orderButton'},
  {id: '13:00-13:30', status: 'orderButton'},
  {id: '13:30-14:00', status: 'orderButton'},
  {id: '14:00-14:30', status: 'orderButton'},
  {id: '14:30-15:00', status: 'orderButton'},
  {id: '15:00-15:30', status: 'orderButton'},
  {id: '15:30-16:00', status: 'orderButton'},
  {id: '16:00-16:30', status: 'orderButton'},
  {id: '16:30-17:00', status: 'orderButton'},
  {id: '17:00-17:30', status: 'orderButton'},
  {id: '17:30-18:00', status: 'orderButton'},
  {id: '18:00-18:30', status: 'orderButton'},
  {id: '18:30-19:00', status: 'orderButton'},
  {id: '19:00-19:30', status: 'orderButton'},
  {id: '19:30-20:00', status: 'orderButton'},
  {id: '20:00-20:30', status: 'orderButton'},
  {id: '20:30-21:00', status: 'orderButton'},
  {id: '21:00-21:30', status: 'orderButton'},
  {id: '21:30-22:00', status: 'orderButton'},
];

const renderActions = () => {
  return (
    <Button>Click to book event</Button>
  );
};

const EventNew = () => (
  <Paper className={styles.component}>
    <h2>EventNew view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.id}
            </TableCell>
            <TableCell>
              {row.id}
            </TableCell>
            <TableCell>
              {row.id}
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

export default EventNew;
