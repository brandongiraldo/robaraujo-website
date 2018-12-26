import * as React from 'react';
import styled from '@emotion/styled'

const FooterComponent = styled.footer`
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
`;

const Footer = () => {
  return (
      <FooterComponent>Some footer</FooterComponent>
  );
};

export default Footer;