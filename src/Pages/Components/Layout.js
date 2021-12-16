import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Navbar/>
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
