import React from 'react';
import Header from 'containers/Header';

const Layout = ({
  children,
}) => (
  <div>
    {children}
    <Header />
  </div>
);

export default Layout;
