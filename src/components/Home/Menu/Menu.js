import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-background-image';

import Title from '../../Title/Title';

const getMenu = graphql`
  query {
    menu: allContentfulCoffeeItem {
      edges {
        node {
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`;

const getCategories = items => {
  const catArray = items.map(item => item.node.category);
  const categories = Array.from(new Set(catArray));
  return ['all', ...categories];
};

const Menu = () => {
  const { menu } = useStaticQuery(getMenu);
  const [items, setItems] = useState(menu.edges);

  const [categories] = useState(getCategories(items));

  const handleItems = category => {
    if (category === 'all') {
      setItems(menu.edges);
    } else {
      const newItems = menu.edges.filter(
        ({ node }) => node.category === category
      );
      setItems(newItems);
    }
  };

  return (
    <section className="menu py-5">
      <div className="container">
        <Title title="Best of Our Menu" />
        <div className="row mb-5">
          <div className="col-10 mx-auto text-center">
            {categories.map((category, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className="btn btn-outline-warning text-capitalize m-3"
                  onClick={() => handleItems(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        <div className="row">
          {items.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="col-11 col-md-6 my-3 d-flex mx-auto"
              >
                <div>
                  <Image fixed={node.image.fixed} />
                </div>
                <div className="flex-grow-1 px-3">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">
                      <small>{node.title}</small>
                    </h6>
                    <h6 className="mb-0 text-warning">
                      <small>${node.price}</small>
                    </h6>
                  </div>
                  <p className="text-muted">
                    <small>{node.description.description}</small>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
