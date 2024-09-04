import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Your Name
      </Typography>
      <Box>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/about" passHref>
          <Button color="inherit">About</Button>
        </Link>
        <Link href="/portfolio" passHref>
          <Button color="inherit">Portfolio</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button color="inherit">Contact</Button>
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;