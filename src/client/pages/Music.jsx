import * as React from 'react';
import {Component} from "react";

export default class Music extends Component {
  state = {
    links: null,
  };

  componentDidMount() {
    fetch('/api/music')
        .then(res => res.json())
        .then(data => this.setState({
          links: data.links,
          title: data.title
        }));
  }

  render() {
    const links = this.state.links;
    return (
        <>
          {this.state.links ? (
              <div className="container">
                <h1>{this.state.title}</h1>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  {links.splice(0, links.length / 2).map((link, index) => {
                    return <div key={index} dangerouslySetInnerHTML={{ __html: link }} />
                  })}
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    {links.map((link, index) => {
                      return <div key={index} dangerouslySetInnerHTML={{ __html: link }} />
                    })}
                  </div>
                </div>
              </div>
          ) : (
              <div>Loading...</div>
          )}
        </>
    );
  }
}