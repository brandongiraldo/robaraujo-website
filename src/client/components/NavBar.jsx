import * as React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
      <nav>
        <Link to="/">{'Home'}</Link>
        <Link to="/about">{'About'}</Link>
        <Link to="/music">{'Music'}</Link>
        <Link to="/posts">{'Posts'}</Link>
        <Link to="/contact">{'Contact'}</Link>
      </nav>
  );
};

export default NavBar;
