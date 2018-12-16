import React  from 'react';
import './app.css';
import 'bootstrap-css-only';
import NavBar from './components/navigation/NavBar';
import Footer from './components/footer/Footer';

const App = (props) => {
  return (
      <>
        <NavBar/>{props.children}<Footer/>
      </>
  );
};

export default App;