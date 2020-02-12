import React from 'react';
import BackgroundImage from 'gatsby-background-image';

const Background = ({ fluid, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={fluid}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  );
};

Background.defaultProps = {
  title: 'Default Title',
  styleClass: 'defaultBackground',
};

export default Background;
