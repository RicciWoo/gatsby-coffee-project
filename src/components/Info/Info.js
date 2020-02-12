import React from 'react';
import { Link } from 'gatsby';

import Title from '../Title/Title';

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              cupiditate nemo sapiente inventore impedit minima enim, nisi
              facilis amet temporibus? Id, inventore accusantium, consequuntur
              nobis laboriosam cum nisi nulla delectus nostrum corporis quis
              laborum consequatur excepturi velit assumenda! Cupiditate ipsam
              numquam ab minus distinctio qui nulla quidem cum itaque omnis.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btnYellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
