import React from 'react';
import Image from 'gatsby-image';

const Product = ({ product }) => {
  console.log(product);
  if (product) {
    return (
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
        <div className="card" style={{ minHeight: '100%' }}>
          <Image fluid={product.image.fluid} className="card-img-top" />
          <div className="card-body text-center">
            <h6>{product.title}</h6>
            <h6>${product.price}</h6>
            <button className="btn btn-outline-warning mt-3 text-capitalize">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Product;