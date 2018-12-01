import * as React from 'react';
import {Route, Link} from 'react-router-dom';
import App from '../App';

const HomeComponent = () => {
  return (
    <>
      <h1>ROB ARAUJO</h1>
      <ul>
        <li>PIANIST</li>
        <li>PRODUCER</li>
        <li>EDUCATOR</li>
      </ul>
      <ul>
        <a href={'https://google.com'}><ul>Google</ul></a>
        <a href={'https://google.com'}><ul>Google</ul></a>
        <a href={'https://google.com'}><ul>Google</ul></a>
        <a href={'https://google.com'}><ul>Google</ul></a>
        <a href={'https://google.com'}><ul>Google</ul></a>
      </ul>
    </>
  );
};

const AboutComponent = () => {
  return <h1>Rob started taking classical piano lessons at age 5, eventually coming to study under Ida Trebecka and playing competitively throughout middle and high school. While studying Biology at Cornell University, Rob was exposed to and particularly intrigued by jazz and hip-hop, and worked for several years to form a unique musical voice colored by these influences.
    Rob began a doctorate degree in 2016, but withdrew shortly after to pursue music full time. Since then, Rob has worked and performed with a wide variety of artists including Tom Misch, Masego, ELEW, MonoNeon, and many others. Rob currently resides in Los Angeles, California, doing work as a keyboardist, composer, producer, and teacher.</h1>
};

const MusicComponent = () => {
  return (
    <ul>
      <li>song 1</li>
      <li>song 2</li>
      <li>song </li>
    </ul>
  );
};

const PostComponent = () => {
  return <ul>
    <li>post 1</li>
    <li>post 2</li>
    <li>post </li>
  </ul>
};


const ContactComponent = () => {
  return (
      <form className="col-xs-12 col-sm-12 col-md-12 col-lg-12" method="post" action="#contact">
        <input placeholder="NAME" type="text" name="name" required=""/>
        <input placeholder="EMAIL" type="text" name="mail" required=""/>
        <input placeholder="SUBJECT" type="text" name="subject" required=""/>
        <h3 className="textarea">MESSAGE</h3>
        <textarea rows="6" cols="50" name="comment" required=""/>
        <p className="error"/>
        <button className="submit" type="submit">SUBMIT</button>
      </form>
  );
};

export default class Routes extends React.Component {
  render() {
    return (
        <>
          <Route path={'/'} exact strict render={() => <App><HomeComponent/></App>}/>
          <Route path={'/about'} exact strict render={() => <App><AboutComponent/></App>}/>
          <Route path={'/music'} exact strict render={() => <App><MusicComponent/></App>}/>
          <Route path={'/posts'} exact strict render={() => <App><PostComponent/></App>}/>
          <Route path={'/contact'} exact strict render={() => <App><ContactComponent/></App>}/>
        </>
    );
  }
}
