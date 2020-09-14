import React from 'react';
import MainLayout from  './components/layout/MainLayout/MainLayout';
import PageNav from  './components/layout/PageNav/PageNav';
import {BrowserRouter/*, Route*/, Switch} from 'react-router-dom';
//import Homepage from  './components/views/Homepage/Homepage';
//import LoginUser from './components/views/LoginUser/LoginUser';
//import Kitchen from './components/views/Kitchen/Kitchen';
//import ListForToday from './components/views/ListForToday/ListForToday';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <div>fff</div>
        <Switch>
          {/* <Route path={process.env.PUBLIC_URL + '/homepage'} component={Homepage} /> */}
          {/* <Route path={process.env.PUBLIC_URL + '/loginUser'} component={LoginUser} /> */}
          {/* <Route path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} /> */}
          {/* <Route path={process.env.PUBLIC_URL + '/listForToday'} component={ListForToday} /> */}
        </Switch>
      </MainLayout>
      <PageNav />
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
