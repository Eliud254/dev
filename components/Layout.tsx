import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    <Navbar />
    <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
      {children}
    </Container>
    <Footer />
  </Box>
);

export default Layout;