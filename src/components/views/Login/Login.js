import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Login.module.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {

  render() {
    return (
      <div className="App">
        <h2>Login view</h2>
        <header className="App-header">
          <div className="Login">
            <TextField variant="standard" placeholder="Username" margin="normal" required />
            <TextField variant="standard" placeholder="Password" margin="normal" required type="password" />
            <div className="Button">
              <Button component={Link} to={`/panel/dashboard`} variant="contained" color="primary" >Log In</Button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Login;
