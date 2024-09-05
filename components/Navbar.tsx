import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/system';

const Logo = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.8rem',
  color: '#ffffff',
});

const NavLink = styled(Button)({
  color: '#ffffff',
  marginRight: '20px',
  textTransform: 'none',
  fontSize: '1rem',
  '&:hover': {
    color: '#ffffff',
    textShadow: '0px 0px 10px rgba(255, 255, 255, 0.9)',
  },
});

const Navbar: React.FC = () => (
  <AppBar 
    position="static" 
    style={{ 
      backgroundColor: 'transparent', 
      padding: '10px 0', 
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Adds the shadow below the navbar
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Border to further separate the navbar
    }}
  >
    <Toolbar style={{ justifyContent: 'space-between' }}>
      <Logo>Eliud</Logo>
      <Box>
        <NavLink component={Link} href="/">Home</NavLink>
        <NavLink component={Link} href="/about">About</NavLink>
        <NavLink component={Link} href="/portfolio">Portfolio</NavLink>
        <NavLink component={Link} href="/contact">Contact</NavLink>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
