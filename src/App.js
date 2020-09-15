import React from 'react';
import MainLayout from  './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from  './components/views/Home/Home';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import ListForToday from './components/views/ListForToday/ListForToday';
import NotFound from './components/views/NotFound/NotFound';
import Ordering from './components/views/Ordering/Ordering';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/home'} component={Home} />
          <Route path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route path={process.env.PUBLIC_URL + '/listForToday'} component={ListForToday} />
          <Route path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
          <Route path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

/* <div className="App">
        <header className="App-header">
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React Now! Right now! </a>
        </header>
      </div> */
