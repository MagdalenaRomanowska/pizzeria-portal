import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {tableNumber: '1', order: 123, clientNumber: '1', price: '50 zl',
    drinks: 'tea', drinksAmount: '1', drinksComment: 'no sugar',
    starter: 'chips', starterAmount: '2', starterComment: 'extra ketchup',
    dish: 'dinner set no.1', dishAmount: '1', dishComment: 'very spicy',
    dessert: 'tiramisu', dessertAmount: '2', dessertComment: 'extra whip cream',
  },
];

const WaiterOrderNew = () => (
  <Paper className={styles.component}>
    <h2>WaiterOrderNew view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell><b>Table Number</b></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell><b>Order Number</b></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell><b>Client Number</b></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell><b>Price</b></TableCell>
          <TableCell></TableCell>
        </TableRow>

      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.order}>
            <TableCell component="th" scope="row">
            </TableCell>
            <TableCell>{row.tableNumber}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>{row.order}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>{row.clientNumber}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell><b>Drinks</b></TableCell>
          <TableCell><b>Drinks <br></br>Amount</b></TableCell>
          <TableCell><b>Drinks <br></br>- comment</b></TableCell>
          <TableCell><b>Starter</b></TableCell>
          <TableCell><b>Starter <br></br>Amount</b></TableCell>
          <TableCell><b>Starter <br></br>- comment</b></TableCell>
          <TableCell><b>Ordered <br></br>Dish</b></TableCell>
          <TableCell><b>Dish <br></br>Amount</b></TableCell>
          <TableCell><b>Dish <br></br>- comment</b></TableCell>
          <TableCell><b>Dessert</b></TableCell>
          <TableCell><b>Dessert <br></br>Amount</b></TableCell>
          <TableCell><b>Dessert <br></br>- comment</b></TableCell>
        </TableRow>
        {demoContent.map(row => (
          <TableRow key={row.order}>
            <TableCell component="th" scope="row">
              {row.drinks}
            </TableCell>
            <TableCell>
              {row.drinksAmount}
            </TableCell>
            <TableCell>
              {row.drinksComment}
            </TableCell>
            <TableCell>
              {row.starter}
            </TableCell>
            <TableCell>
              {row.starterAmount}
            </TableCell>
            <TableCell>
              {row.starterComment}
            </TableCell>
            <TableCell>
              {row.dish}
            </TableCell>
            <TableCell>
              {row.dishAmount}
            </TableCell>
            <TableCell>
              {row.dishComment}
            </TableCell>
            <TableCell>
              {row.dessert}
            </TableCell>
            <TableCell>
              {row.dessertAmount}
            </TableCell>
            <TableCell>
              {row.dessertComment}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default WaiterOrderNew;
