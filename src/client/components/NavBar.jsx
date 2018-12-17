import * as React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
      <nav>
        <NavLink exact={true} activeClassName='is-active' to="/">{'Home'}</NavLink>
        <NavLink activeClassName='is-active' to="/about">{'About'}</NavLink>
        <NavLink activeClassName='is-active' to="/music">{'Music'}</NavLink>
        <NavLink activeClassName='is-active' to="/posts">{'Posts'}</NavLink>
        <NavLink activeClassName='is-active' to="/contact">{'Contact'}</NavLink>
      </nav>
  );
};

export default NavBar;
