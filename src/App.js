import React from 'react';
import MainLayout from  './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from  './components/views/Dashboard/Dashboard';
import Ordering from  './components/views/Ordering/Ordering';
import OrderingNew from  './components/views/OrderingNew/OrderingNew';
import OrderingDetails from  './components/views/OrderingDetails/OrderingDetails';
import ListForToday from  './components/views/ListForToday/ListForToday';

import Tables from './components/views/Tables/Tables';
import BookingDetails from './components/views/BookingDetails/BookingDetails';
import BookingNew from './components/views/BookingNew/BookingNew';
import EventDetails from './components/views/EventDetails/EventDetails';
import EventNew from './components/views/EventNew/EventNew';

import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderDetails from './components/views/WaiterOrderDetails/WaiterOrderDetails';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';

import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import NotFound from './components/views/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + ''} />
          <Route exact path={process.env.PUBLIC_URL + '/dashboard'} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/dashboard/ordering'} component={Ordering} />
          <Route exact path={process.env.PUBLIC_URL + '/dashboard/ordering/new'} component={OrderingNew} />
          <Route path={process.env.PUBLIC_URL + '/dashboard/ordering/order/'} component={OrderingDetails} />
          <Route exact path={process.env.PUBLIC_URL + '/dashboard/listForToday'} component={ListForToday} />

          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route path={process.env.PUBLIC_URL + '/tables/booking/'} component={BookingDetails} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/bookings/new'} component={BookingNew} />
          <Route path={process.env.PUBLIC_URL + '/tables/event/'} component={EventDetails} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={EventNew} />

          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route path={process.env.PUBLIC_URL + '/waiter/order/'} component={WaiterOrderDetails} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/orders/new'} component={WaiterOrderNew} />

          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

