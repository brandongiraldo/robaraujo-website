import * as React from 'react';
import {Component} from "react";
import styled from '@emotion/styled'

const HomeComponent = styled.div(props => ({
  height: `100vh`,
  background: `url(${props.src})`,
  backgroundSize: `cover`,
  transition: `background 0.2s ease-in-out`
}));

export default class Home extends Component {
  state = {
    name: null,
    subtitles: null,
    links: null,
    heroImage: null,
  };

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(data => this.setState({
        name: data.name,
        subtitles: data.subtitles,
        links: data.links,
        heroImage: data.heroImage
      }));
  }

  render() {
    const {name, subtitles, links, heroImage} = this.state;
    return (
        <>
        {name && subtitles && links && heroImage ? (
            <HomeComponent src={heroImage}>
              <div className="container">
                <h1>{name}</h1>
                <ul>
                  {subtitles.map((subtitle, index) => {
                    return <li key={index}>{subtitle}</li>;
                  })}
                </ul>
                <ul>
                  {links.map((link, index) => {
                    return <a href={link.url} key={index}>{`link #${index}`}</a>;
                  })}
                </ul>
              </div>
            </HomeComponent>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }
}