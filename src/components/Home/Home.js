import React from 'react';
import { FaGulp } from 'react-icons/fa';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <FaGulp />
  </Layout>
);

export default Home;
