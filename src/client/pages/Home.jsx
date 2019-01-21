import * as React from 'react';
import {Component} from "react";
import styled from '@emotion/styled'

const HomeComponent = styled.div(props => ({
  height: `100vh`,
  background: `url(${props.src})`,
  backgroundSize: `cover`,
  transition: `background 0.2s ease-in-out`
}));

const ContainerComponent = styled.div({
  position: `absolute`,
  top: `40%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  color: `#ffffff`,
});

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
              <ContainerComponent className="container">
                <h1>{name}</h1>
                <ul>
                  {subtitles.map((subtitle, index) => {
                    return <li key={index}>{subtitle}</li>;
                  })}
                </ul>
                <ul>
                  {links.map((link, index) => {
                    return <i className={`fa ${link.icon}`}/>
                    // return <FontAwesomeIcon icon={link.icon} href={link.url} key={index}/>
                  })}
                </ul>
              </ContainerComponent>
            </HomeComponent>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }
}