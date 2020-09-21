import React from 'react';
import DatePicker from '../../features/DatePicker/DatePicker';
import {Link} from 'react-router-dom';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {hour: '10:00-10:30', tables:[null, null, null]},
  {hour: '10:30-11:00', tables:[null, null, null]},
  {hour: '11:00-11:30', tables:[null, null, null]},
  {hour: '11:30-12:00', tables:[null, null, null]},
  {hour: '12:00-12:30', tables:[null, null, {name: 'event 3', id: 'event/3'}]},
  {hour: '12:30-13:00', tables:[null, null, {name: 'event 3', id: 'event/3'}]},
  {hour: '13:00-13:30', tables:[null, {name: 'event 4', id: 'event/4'}, {name: 'event 3', id: 'event/3'}]},
  {hour: '13:30-14:00', tables:[{name: 'event 1', id: 'event/1'}, {name: 'event 4', id: 'event/4'}, {name: 'event 3', id: 'event/3'}]},
  {hour: '14:00-14:30', tables:[{name: 'event 1', id: 'event/1'}, {name: 'event 4', id: 'event/4'}, null]},
  {hour: '14:30-15:00', tables:[{name: 'event 1', id: 'event/1'}, {name: 'event 4', id: 'event/4'}, null]},
  {hour: '15:00-15:30', tables:[{name: 'event 1', id: 'event/1'}, {name: 'event 4', id: 'event/4'}, null]},
  {hour: '15:30-16:00', tables:[{name: 'event 1', id: 'event/1'}, {name: 'event 4', id: 'event/4'}, null]},
  {hour: '16:00-16:30', tables:[{name: 'event 1', id: 'event/1'}, {name: 'event 4', id: 'event/4'}, {name: 'event 2', id: 'event/2'}]},
  {hour: '16:30-17:00', tables:[{name: 'event 1', id: 'event/1'}, {name: 'event 4', id: 'event/4'}, {name: 'event 2', id: 'event/2'}]},
  {hour: '17:00-17:30', tables:[{name: 'event 1', id: 'event/1'}, null, {name: 'event 2', id: 'event/2'}]},
  {hour: '17:30-18:00', tables:[null, null, {name: 'event 2', id: 'event/2'}]},
  {hour: '18:00-18:30', tables:[null, {name: 'event 5', id: 'event/5'}, null]},
  {hour: '18:30-19:00', tables:[null, {name: 'event 5', id: 'event/5'}, null]},
  {hour: '19:00-19:30', tables:[null, {name: 'event 5', id: 'event/5'}, null]},
  {hour: '19:30-20:00', tables:[null, {name: 'event 5', id: 'event/5'}, null]},
  {hour: '20:00-20:30', tables:[null, null, null]},
  {hour: '20:30-21:00', tables:[null, null, null]},
  {hour: '21:00-21:30', tables:[null, null, null]},
  {hour: '21:30-22:00', tables:[null, null, null]},
  {hour: '22:00-22:30', tables:[{name: 'booking 4', id: 'booking/4'}, {name: 'booking 4', id: 'booking/4'}, {name: 'booking 4', id: 'booking/4'}]},
  {hour: '22:30-23:00', tables:[{name: 'booking 4', id: 'booking/4'}, {name: 'booking 4', id: 'booking/4'}, {name: 'booking 4', id: 'booking/4'}]},
  {hour: '23:00-23:30', tables:[{name: 'booking 5', id: 'booking/5'}, {name: 'booking 5', id: 'booking/5'}, null]},
  {hour: '23:30-00:00', tables:[{name: 'booking 5', id: 'booking/5'}, {name: 'booking 5', id: 'booking/5'}, null]},
];

const Tables = () => (

  <div className={styles.component}>
    <h2>Tables view</h2>
    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/bookings/new`} className={styles.list} activeclassname='active'>New booking</Button><br></br>
    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`} className={styles.list} activeclassname='active'>New event</Button><br></br>
    <div className={styles.time}>Pick a date
      <DatePicker />
    </div>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell>
                <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/${row.tables[0] == null ? '' : row.tables[0].id}`} className={styles.list}>
                  {row.tables[0] == null ? 'free' : row.tables[0].name}
                </Button>
              </TableCell>
              <TableCell>
                <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/${row.tables[1] == null ? '' : row.tables[1].id}`} className={styles.list}>
                  {row.tables[1] == null ? 'free' : row.tables[1].name}
                </Button>
              </TableCell>
              <TableCell>
                <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/${row.tables[2] == null ? '' : row.tables[2].id}`} className={styles.list}>
                  {row.tables[2] == null ? 'free' : row.tables[2].name}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Tables;
