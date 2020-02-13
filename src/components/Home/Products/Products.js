import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Title from '../../Title/Title';
import Product from './Product/Product';

const getProducts = graphql`
  query {
    products: allContentfulProduct {
      edges {
        node {
          title
          price
          image {
            fluid(maxHeight: 426) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const Products = () => {
  const { products } = useStaticQuery(getProducts);

  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Product" />
        <div className="row">
          {products.edges.map(({ node }) => {
            return <Product key={node.id} product={node} />;
          })}
        </div>
      </div>
      <Product />
    </section>
  );
};

export default Products;
