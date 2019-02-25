import * as React from 'react';
import {Component} from "react";
import Form from "../components/Form";
import TwoColumn from "../layouts/TwoColumn";

export default class Contact extends Component {
  state = {
    title: null,
    image: null,
    imageAlt: null
  };

  componentWillMount() {
    fetch('/api/contact')
        .then(res => res.json())
        .then(data => this.setState({
          title: data.title,
          image: data.image,
          imageAlt: data.imageAlt
        }));
  }

  render() {
    const {title, image, imageAlt} = this.state;
    return (  
      <TwoColumn title={title}
                 contentLeft={<img src={image} alt={imageAlt} className="img-responsive"/>}
                 contentRight={<Form/>} />
    );
  }
}