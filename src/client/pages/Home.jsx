import * as React from 'react';
import {Component} from "react";
import styled from '@emotion/styled'

const HomeComponent = styled.div`
  height: 100vh;
  background: url(http://robaraujo.com/assets/DSC05368.jpg);
  background-size: cover;
`;

export default class Home extends Component {
  state = {
    name: null,
    subtitles: null,
    links: null
  };

  componentDidMount() {
    fetch('/api')
        .then(res => res.json())
        .then(data => this.setState({
          name: data.name,
          subtitles: data.subtitles,
          links: data.links
        }));
  }

  render() {
    return (
        <HomeComponent>
          {this.state.name ? (
            <div className="container">
              <h1>{this.state.name}</h1>
              <ul>
                {this.state.subtitles.map(function(subtitle, index){
                  return <li key={index}>{subtitle}</li>;
                })}
              </ul>
              <ul>
                {this.state.links.map(function(link, index){
                  return <a href={link.url} key={index}>{`link #${index}`}</a>;
                })}
              </ul>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </HomeComponent>
    );
  }
}