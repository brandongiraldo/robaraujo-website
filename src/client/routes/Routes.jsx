import * as React from 'react';
import {Route} from 'react-router-dom';
import '../resources/app.css';
import '../resources/bootstrap.min.css';

import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Music from "../pages/Music";
import Posts from "../pages/Posts";
import Contact from "../pages/Contact";

export default class Routes extends React.Component {
  render() {
    return (
        <>
          <NavBar/>
          <Route path={'/'} exact strict component={Home} />
          <Route path={'/about'} exact strict component={About}/>
          <Route path={'/music'} exact strict component={Music}/>
          <Route path={'/posts'} exact strict component={Posts}/>
          <Route path={'/contact'} exact strict component={Contact}/>
        </>
    );
  }
}
