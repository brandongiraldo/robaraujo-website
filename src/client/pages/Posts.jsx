import * as React from 'react';
import {Component} from "react";

export default class Posts extends Component {
  state = {
    links: null,
    title: null,
  };

  componentDidMount() {
    fetch('/api/posts')
        .then(res => res.json())
        .then(data => this.setState({
          links: data.links,
          title: data.title
        }));
  }

  render() {
    return (
        <>
          {this.state.links ? (
              <div className="container">
                <h1>{this.state.title}</h1>
                <div className="row">
                  {this.state.links.map((link, index) => {
                    return (
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={index}>
                        <div key={index} dangerouslySetInnerHTML={{ __html: link }} />
                      </div>
                    )
                  })}
                </div>
              </div>
          ) : (
              <li>Loading...</li>
          )}
        </>
    );
  }
}