import * as React from 'react';
import {Component} from "react";
import Form from "../components/form/Form";

export default class Contact extends Component {
  state = {
    title: null,
    image: null
  };

  componentDidMount() {
    fetch('/api/contact')
        .then(res => res.json())
        .then(data => this.setState({
          title: data.title,
          image: data.image
        }));
  }

  render() {
    return (
        <>
          {this.state.title ? (
              <>
                <h1>{this.state.title}</h1>
                <img src={this.state.image} alt={this.state.name}/>
                <Form/>
              </>
          ) : (
              <li>Loading...</li>
          )}
        </>
    );
  }
}