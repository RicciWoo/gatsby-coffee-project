import React from 'react';
import { graphql } from 'gatsby';

import About from '../components/About/About';

const AboutPage = ({ data }) => {
  const { fluid } = data.image.childImageSharp;
  return <About fluid={fluid} />;
};

export const query = graphql`
  query {
    image: file(relativePath: { eq: "aboutBackground.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default AboutPage;
