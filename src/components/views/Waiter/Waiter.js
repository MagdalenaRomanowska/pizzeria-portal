/*Kiedy użytkownik wchodzi na stronę widoku kelnera, komponent Waiter zostaje zamontowany (ale dopiero za chwilę się wyrenderuje).
W tym momencie uruchamia funkcję, którą otrzymał w propsie fetchTables.A skąd wzięła się ta funkcja? Została przekazana do propsa
przez kontener komponentu – to tam przypisujemy do tego propsa następującą funkcję:
() => dispatch(fetchFromAPI())
To właśnie tę funkcję wykonaliśmy po zamontowaniu komponentu! Wywoła ona funkcję dispatch, a jako jej argument poda wynik funkcji
fetchFromAPI. Ta ostatnia jest kreatorem thunka i znajduje się w tablesRedux.js – zwraca ona thunka, czyli funkcję przyjmująca
dwa argumenty, nazwane przez nas dispatch i getState. Za pomocą drugiej z nich sprawdzamy, czy w stanie aplikacji są już jakieś produkty.
Wtedy zostanie zdispatchowana akcja, która w stanie aplikacji zapisze, że trwa proces wczytywania produktów z API. Następnie
zostanie zapoczątkowane połączenie z API.Zatrzymajmy się na chwilę – nasza aplikacja będzie teraz czekać na odpowiedź serwera.
W międzyczasie możemy wrócić do komponentu Waiter, który właśnie się renderuje. W stanie aplikacji znalazł informację o trwającym
zapytaniu do API, więc wyświetla napis "Loading".Wracając do naszego thunka, serwer zwrócił odpowiedź. Połączenie się powiodło
i dostaliśmy dane stolików. Nasz thunk dispatchuje akcję, w której będą przekazane dane otrzymane z API.Magazyn, po otrzymaniu
tej akcji, jak zwykle wysyła akcję najpierw do middleware'a – Thunk patrzy na tę akcję, widzi że ona nie jest funkcją, więc nie
zajmuje się nią. W takim razie akcja trafia do reducera, który w reakcji na tę akcję dodaje do stanu aplikacji dane stolików.
Po zmianie stanu aplikacji, magazyn wymusza ponowne wyrenderowanie komponentu Waiter, który tym razem wyświetli listę produktów.*/

import {Link} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    tables: PropTypes.any,
    loading: PropTypes.shape({ //PropTypes.shape, który pozwala nam zdefiniować typy właściwości obiektu loading.
      active: PropTypes.bool,
      error: PropTypes.any,
    }),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(status){
    switch (status) {
      case 'free':
        return (
          <>
            <Button>thinking</Button>
            <Button>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button>new order</Button>
        );
      case 'ordered':
        return (
          <Button>prepared</Button>
        );
      case 'prepared':
        return (
          <Button>delivered</Button>
        );
      case 'delivered':
        return (
          <Button>paid</Button>
        );
      case 'paid':
        return (
          <Button>free</Button>
        );
      default:
        return null;
    }
  }

  render() { //w dekonstrukcji propsów w metodzie render od razu dekonstruujemy również obiekt loading.
    const { loading: { active, error }, tables } = this.props;
    // Stosujemy wyrażenie if...else if...else, w którym każdy blok kodu zawiera return.
    // W efekcie mamy trzy warianty zawartości tego komponentu, które zależą od statusu połączenia z API.
    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Link to={`${process.env.PUBLIC_URL}/waiter/orders/new`} className={styles.list} activeclassname='active'>Waiter - New Order</Link><br></br>
          <Link to={`${process.env.PUBLIC_URL}/waiter/order/1`} className={styles.list}>Waiter order details Sample 1</Link><br></br>
          <Link to={`${process.env.PUBLIC_URL}/waiter/order/2`} className={styles.list}>Waiter order details Sample 2</Link>
        </Paper>
      );
    }
  }
}

export default Waiter;

