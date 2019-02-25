import * as React from 'react';
import {Component} from "react";

export default class Music extends Component {
  state = {
    links: [],
    title: null
  };

  componentWillMount() {
    fetch('/api/music')
      .then(res => res.json())
      .then(data => this.setState({
        links: data.links,
        title: data.title
      }));
  }

  render() {
    const {links, title} = this.state;
    const iFrameComponents = links.map((link, index) => <div key={index} dangerouslySetInnerHTML={{ __html: link }} />);
    return (
      <div className="container">
        <h1>{title}</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            {iFrameComponents.slice(0, links.length / 2)}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            {iFrameComponents.slice(links.length / 2, links.length)}
          </div>
        </div>
      </div>
    );
  }
}