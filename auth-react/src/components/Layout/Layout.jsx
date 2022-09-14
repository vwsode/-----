import React from 'react';
import Header from './Header/Header';
import Container from '../ui/Container/Container';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
