import * as React from 'react';
import {NavLink} from 'react-router-dom';
import styled from '@emotion/styled'

const NavComponent = styled.nav`
  text-align: right;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const NavWrapper = styled.div`
  z-index: 2;
  right: 0;
  position: absolute;
  transition: opacity 0.3s ease-out;
  &:hover > a {
    opacity: .5;
  }
  &:hover > a:hover {
    opacity: 1.0;
  }
`;

const NavLinkComponent = styled(NavLink)`
  display: inline-block;
  letter-spacing: 1.3px;
  font-size: 12px;
  padding: 25px 30px;
  text-decoration: none;
  height: 100%;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  transition: opacity 0.3s ease-out;
  &:hover {
    text-decoration: none;
    color: white;
  }
  &.is-active {
    color: white;
    text-decoration: none;
  }
`;

const Nav = () => {
  return (
      <NavComponent>
        <NavWrapper>
          <NavLinkComponent exact={true} activeClassName='is-active' to="/">{'Home'}</NavLinkComponent>
          <NavLinkComponent activeClassName='is-active' to="/about">{'About'}</NavLinkComponent>
          <NavLinkComponent activeClassName='is-active' to="/music">{'Music'}</NavLinkComponent>
          <NavLinkComponent activeClassName='is-active' to="/posts">{'Posts'}</NavLinkComponent>
          <NavLinkComponent activeClassName='is-active' to="/contact">{'Contact'}</NavLinkComponent>
        </NavWrapper>
      </NavComponent>
  );
};

export default Nav;
