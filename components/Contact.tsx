import React from 'react';
import { Typography, Box, Link, Paper } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'; // Import icons

const Contact: React.FC = () => (
  <Box
    sx={{
      background: 'linear-gradient(135deg, #1e1e1e, #111)', // Dark gradient background
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px',
    }}
  >
    <Paper
      elevation={3}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent paper
        backdropFilter: 'blur(10px)', // Blur effect for a modern look
        padding: 4,
        maxWidth: '600px',
        width: '100%',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ color: '#fff', mb: 4 }}
      >
        Connect with Me
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Link
          href="https://www.linkedin.com/in/eliud-obure-6a7684224/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            textDecoration: 'none',
            mb: 2,
            '&:hover': {
              color: '#1e90ff', // Change color on hover
            },
          }}
        >
          <LinkedIn sx={{ mr: 1 }} /> LinkedIn
        </Link>
        <Link
          href="https://github.com/Eliud254"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            textDecoration: 'none',
            mb: 2,
            '&:hover': {
              color: '#f0f0f0', // Change color on hover
            },
          }}
        >
          <GitHub sx={{ mr: 1 }} /> GitHub
        </Link>
        <Link
          href="https://twitter.com/EliudObure" 
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            textDecoration: 'none',
            mb: 2,
            '&:hover': {
              color: '#1da1f2', // Twitter blue on hover
            },
          }}
        >
          <Twitter sx={{ mr: 1 }} /> Twitter
        </Link>
      </Box>
    </Paper>
  </Box>
);

export default Contact;
