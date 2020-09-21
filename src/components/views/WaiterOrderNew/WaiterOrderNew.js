import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {tableNumber: '1', products: 'products list', productOption: 'options list',
    orderedProducts: 'tomato soup, fish and chips', orderedProductsOptions: 'sour, extra ketchup',
    price: '10 zl, 20 zł', totalPrice: '30 zl',
  },
];

const WaiterOrderNew = () => (
  <Paper className={styles.component}>
    <h2>WaiterOrderNew view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><b>Table Number</b></TableCell>
          <TableCell><b>Products</b></TableCell>
          <TableCell><b>Products options</b></TableCell>
          <TableCell><b>Ordered products</b></TableCell>
          <TableCell><b>Ordered products options</b></TableCell>
          <TableCell><b>Price</b></TableCell>
          <TableCell><b>Total price</b></TableCell>
        </TableRow>

      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.order}>
            <TableCell component="th" scope="row">{row.tableNumber}</TableCell>
            <TableCell>{row.products}</TableCell>
            <TableCell>{row.productOption}</TableCell>
            <TableCell>{row.orderedProducts}</TableCell>
            <TableCell>{row.orderedProductsOptions}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.totalPrice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default WaiterOrderNew;
