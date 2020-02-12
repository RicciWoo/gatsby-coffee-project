import React from 'react';

import '../../css/bootstrap.min.css';
import '../../css/main.css';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
