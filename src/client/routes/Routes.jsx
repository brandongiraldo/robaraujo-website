import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../resources/app.css';
import '../resources/bootstrap.min.css';
import styled from '@emotion/styled'

import Home from "../pages/Home";
import About from "../pages/About";
import Music from "../pages/Music";
import Posts from "../pages/Posts";
import Contact from "../pages/Contact";
import {withRouter} from "react-router";

const Routes = ({location}) => {
    return (
        <Wrapper>
          <TransitionGroup className="transition-group">
            <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }}  classNames={'fade'}>
              <section className="route-section">
                <Switch location={location}>
                  <Route path={'/'} exact component={Home} />
                  <Route path={'/about'} component={About}/>
                  <Route path={'/music'} component={Music}/>
                  <Route path={'/posts'} component={Posts}/>
                  <Route path={'/contact'} component={Contact}/>
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
    
    div.transition-group {
        position: relative;
    }

    section.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }
`;

export default withRouter(Routes);
