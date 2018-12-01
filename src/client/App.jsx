import React, { Component } from 'react';
import './app.css';
import NavBar from './components/navigation/NavBar';
import Footer from './components/footer/Footer';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/about')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <>
        <NavBar/>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        {this.props.children}
        <Footer/>
      </>
    );
  }
}
