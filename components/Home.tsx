import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

const Home: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70vh',
      textAlign: 'center',
    }}
  >
    <Typography variant="h2" component="h1" gutterBottom>
      Welcome to My Portfolio
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      I'm a Software Engineer passionate about creating amazing web experiences
    </Typography>
    <Link href="/portfolio" passHref>
      <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
        View My Work
      </Button>
    </Link>
  </Box>
);

export default Home;