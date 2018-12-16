import * as React from 'react';
import {Component} from "react";
import Form from "../components/Form";
import TwoColumn from "../layouts/TwoColumn";

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
              <TwoColumn title={this.state.title}
                         contentLeft={<img src={this.state.image} alt={this.state.name} className="img-responsive"/>}
                         contentRight={<Form/>} />
          ) : (
              <li>Loading...</li>
          )}
        </>
    );
  }
}