import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Button, Breadcrumbs } from '@material-ui/core';
import style from './NavBar.module.css';

function NavBar({ history }) {
  const login = () => {
    localStorage.setItem('isAuthorized', true);
    history.push('/protected');
  };

  const logout = () => {
    localStorage.setItem('isAuthorized', false);
    history.push('/');
  };

  return (
    <div className={style.navbar}>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="textPrimary" to="/">
            Home
          </Link>
          <Link color="textPrimary" to="/protected">
            My Todos
          </Link>
        </Breadcrumbs>
      </div>

      <div>
        <Button variant="outlined" color="primary" onClick={login}>
          LOGIN
        </Button>
        <Button variant="outlined" color="primary" onClick={logout}>
          LOGOUT
        </Button>
      </div>
    </div>
  );
}

export default withRouter(NavBar);
