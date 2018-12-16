import * as React from 'react';
import {Component} from "react";

export default class Posts extends Component {
  state = {
    links: null,
  };

  componentDidMount() {
    fetch('/api/posts')
        .then(res => res.json())
        .then(data => this.setState({
          links: data.links
        }));
  }

  render() {
    return (
        <>
          {this.state.links ? (
              <>
                <ul>
                  {this.state.links.map(function(link, index){
                    return <div key={index} dangerouslySetInnerHTML={{ __html: link }} />
                  })}
                </ul>
              </>
          ) : (
              <li>Loading...</li>
          )}
        </>
    );
  }
}