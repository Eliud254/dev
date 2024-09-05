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
    position="fixed"  // Set to fixed
    style={{ 
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'transparent', 
      padding: '10px 0', 
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      zIndex: 1300,     // Ensure it stays above other content
    }}
  >
    <Toolbar style={{ justifyContent: 'space-between' }}>
      <Logo>Eliud</Logo>
      <Box>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/about" passHref>
          <NavLink>About</NavLink>
        </Link>
        <Link href="/portfolio" passHref>
          <NavLink>Portfolio</NavLink>
        </Link>
        <Link href="/contact" passHref>
          <NavLink>Contact</NavLink>
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
