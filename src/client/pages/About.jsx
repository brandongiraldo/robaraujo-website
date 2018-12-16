import * as React from 'react';
import {Component} from "react";
import TwoColumn from "../layouts/TwoColumn";
import Image from "../components/Image";

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
            <TwoColumn title={this.state.title}
                       contentLeft={<Image src={this.state.image} alt={this.state.title} />}
                       contentRight={<p>{this.state.description}</p>} />
          ) : (
              <li>Loading...</li>
          )}
        </>
    );
  }
}