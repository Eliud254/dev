import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { styled } from '@mui/system';

const Logo = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.8rem',
  color: '#ffffff',
  flexGrow: 1,
});

const NavLink = styled(Button)({
  color: '#ffffff',
  marginRight: '20px',
  textTransform: 'none',
  fontSize: '1rem',
  '&:last-of-type': {
    marginRight: 0,
  },
  '&:hover': {
    color: '#ffffff',
    textShadow: '0px 0px 10px rgba(255, 255, 255, 0.9)',
  },
});

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar 
      position="fixed" 
      style={{ 
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent', 
        padding: '10px 20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1300,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <Toolbar style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Logo>Eliud</Logo>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <Link href="/" passHref>
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/about" passHref>
                <ListItemText primary="About" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/portfolio" passHref>
                <ListItemText primary="Portfolio" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/contact" passHref>
                <ListItemText primary="Contact" />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
