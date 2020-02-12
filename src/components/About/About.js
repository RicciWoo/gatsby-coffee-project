import React from 'react';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';
import Background from '../Background/Background';
import Info from '../Info/Info';

const About = ({ fluid }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Background fluid={fluid} title="About Us" styleClass="aboutBackground" />
      <Info />
    </Layout>
  );
};

export default About;
