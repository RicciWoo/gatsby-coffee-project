import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';
import Background from '../Background/Background';
import Info from '../Info/Info';
import Menu from './Menu/Menu';
import Products from './Products/Products';
import Contact from './Contact/Contact';

const getImage = graphql`
  query {
    image: file(relativePath: { eq: "defaultBackground.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Home = () => {
  const { image } = useStaticQuery(getImage);
  const fluid = image.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title="Home" />
      <Background
        fluid={fluid}
        title="Regular Ricky's"
        styleClass="defaultBackground"
      />
      <Info about />
      <Menu />
      <Products />
      <Contact />
    </Layout>
  );
};

export default Home;
