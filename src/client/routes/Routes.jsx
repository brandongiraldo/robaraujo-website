import * as React from 'react';
import {Route} from 'react-router-dom';
import App from '../App';
import Home from "../pages/Home";
import About from "../pages/About";
import Music from "../pages/Music";
import Posts from "../pages/Posts";
import Contact from "../pages/Contact";

export default class Routes extends React.Component {
  render() {
    return (
        <>
          <Route path={'/'} exact strict render={() => <App><Home/></App>}/>
          <Route path={'/about'} exact strict render={() => <App><About/></App>}/>
          <Route path={'/music'} exact strict render={() => <App><Music/></App>}/>
          <Route path={'/posts'} exact strict render={() => <App><Posts/></App>}/>
          <Route path={'/contact'} exact strict render={() => <App><Contact/></App>}/>
        </>
    );
  }
}
