import React from 'react';
import { Typography, Box, Link, Paper, useTheme, useMediaQuery } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1e1e1e, #111)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '20px' : '50px',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: isMobile ? 3 : 4,
          maxWidth: '600px',
          width: '100%',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h1"
          gutterBottom
          sx={{ color: '#fff', mb: 4 }}
        >
          Connect with Me
        </Typography>
        <Box sx={{ mb: 4 }}>
          {[
            { icon: <LinkedIn />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/eliud-obure-6a7684224/', hoverColor: '#1e90ff' },
            { icon: <GitHub />, text: 'GitHub', href: 'https://github.com/Eliud254', hoverColor: '#f0f0f0' },
            { icon: <Twitter />, text: 'Twitter', href: 'https://twitter.com/EliudObure', hoverColor: '#1da1f2' },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textDecoration: 'none',
                mb: 2,
                padding: isMobile ? '10px 0' : '10px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: link.hoverColor,
                  transform: 'translateY(-3px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                },
              }}
            >
              {React.cloneElement(link.icon, { sx: { mr: 1, fontSize: isMobile ? '1.5rem' : '2rem' } })}
              <Typography variant={isMobile ? "body1" : "h6"}>{link.text}</Typography>
            </Link>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Contact;