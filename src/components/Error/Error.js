import React from 'react';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';

const Error = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default Error;
