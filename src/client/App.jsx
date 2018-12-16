import React  from 'react';
import './app.css';
import 'bootstrap-css-only';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = (props) => {
  return (
      <>
        <NavBar/>{props.children}<Footer/>
      </>
  );
};

export default App;