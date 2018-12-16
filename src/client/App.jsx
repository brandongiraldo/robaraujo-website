import React  from 'react';
import './resources/app.css';
import './resources/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = (props) => {
  return (
      <><NavBar/>{props.children}<Footer/></>
  );
};

export default App;