import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {order: 123, tableNumber: '1', onlineOrderNumber: '', dishes: 'dinner set no.1', amount: 3},
  {order: 234, tableNumber: '2', onlineOrderNumber: '', dishes: 'dinner set no.2', amount: 2},
  {order: 345, tableNumber: '', onlineOrderNumber: 'online 1', dishes: 'dinner set no.3', amount: 4},
];

const renderActions = () => {
  return (
    <Button>Ready to go</Button>
  );
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <h2>Kitchen view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order Number</TableCell>
          <TableCell>Table Number <br></br>/ Online Order Number</TableCell>
          <TableCell>Ordered Dishes</TableCell>
          <TableCell>Dishes Amount</TableCell>
          <TableCell></TableCell>
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
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
