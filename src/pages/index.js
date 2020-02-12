import React from 'react';
import { graphql } from 'gatsby';

import Home from '../components/Home/Home';

const HomePage = ({ data }) => {
  const { fluid } = data.image.childImageSharp;
  return <Home fluid={fluid} />;
};

export const query = graphql`
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

export default HomePage;
