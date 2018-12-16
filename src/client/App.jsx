import React  from 'react';
import './app.css';
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