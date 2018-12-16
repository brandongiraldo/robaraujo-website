import * as React from 'react';
import {Component} from "react";

export default class About extends Component {
  state = {
    title: null,
    image: null,
    description: null
  };

  componentDidMount() {
    fetch('/api/about')
        .then(res => res.json())
        .then(data => this.setState({
          title: data.title,
          image: data.image,
          description: data.description
        }));
  }

  render() {
    return (
        <>
          {this.state.title ? (
              <>
                <h1>{this.state.title}</h1>
                <img src={this.state.image} alt={this.state.name}/>
                <p>{this.state.description}</p>
              </>
          ) : (
              <li>Loading...</li>
          )}
        </>
    );
  }
}