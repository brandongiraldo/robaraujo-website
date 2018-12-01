import * as React from 'react';
import {Route, Link} from 'react-router-dom';
import App from '../App';

const TestComponent = ({match}) => {
  return (
      <>
        <h1>{`${match.params.id} - id number`}</h1>
        <Link to="/">{'Home'}</Link>
      </>
  );
};

export default class Routes extends React.Component {
  render() {
    return (
        <>
          <Route path={'/'} exact strict component={App} />
          <Route path={'/about'} exact strict component={TestComponent} />
        </>
    );
  }
}
