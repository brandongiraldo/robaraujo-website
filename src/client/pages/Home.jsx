import * as React from 'react';
import {Component} from "react";
import styled from '@emotion/styled'

const HomeComponent = styled.div(props => ({
  height: `100vh`,
  background: `url(${props.src})`,
  backgroundSize: `cover`,
  transition: `background 0.2s ease-in-out`
}));

const Container = styled.div({
  position: `absolute`,
  top: `40%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  color: `#ffffff`,
});

const IconLink = styled.a({
  color: `#FFFFFF`,
  display: `inline`,
});

const Icon = styled.i({
  fontSize: `210%`,
  paddingRight: `20px`,
});

const NameComponent = styled.h1({
  paddingBottom: `0px`,
  marginBottom: `0px`,
});

const SubtitleComponent = styled.p({
  textTransform: `uppercase`,
  marginBottom: `30px`,
  marginTop: `5px`,
});

export default class Home extends Component {
  state = {
    name: null,
    subtitles: [],
    links: [],
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
    const subtitle = subtitles.join(" · ");
    return (
        <>
        {name && subtitles && links && heroImage ? (
            <HomeComponent src={heroImage}>
              <Container className="container">
                <NameComponent>{name}</NameComponent>
                <SubtitleComponent>{subtitle}</SubtitleComponent>
                <ul>
                  {links.map((link, index) =>
                    <IconLink key={index} href={link.url}><Icon className={`fa ${link.icon}`}/></IconLink>
                  )}
                </ul>
              </Container>
            </HomeComponent>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }
}