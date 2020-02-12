import React from 'react';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';
import Background from '../Background/Background';
import Info from '../Info/Info';

const Home = ({ fluid }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Background
        fluid={fluid}
        title="Regular Ricky's"
        styleClass="defaultBackground"
      />
      <Info />
    </Layout>
  );
};

export default Home;
