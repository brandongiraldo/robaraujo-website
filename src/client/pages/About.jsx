import * as React from 'react';
import TwoColumn from "../layouts/TwoColumn";

export default class About extends React.Component {
  state = {
    title: null,
    image: null,
    description: null
  };

  componentWillMount() {
    fetch('/api/about')
      .then(res => res.json())
      .then(data => this.setState({
        title: data.title,
        image: data.image,
        description: data.description
      }));
  }

  render() {
    const {title, image, description} = this.state;
    return (
      <TwoColumn title={title} 
                 contentLeft={<img src={image} alt={title} className="img-responsive"/>}
                 contentRight={<p>{description}</p>} />
    );
  }
}
