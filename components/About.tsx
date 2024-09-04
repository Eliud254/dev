import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const About: React.FC = () => (
  <Box>
    <Typography variant="h3" component="h1" gutterBottom>
      About Me
    </Typography>
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <Typography variant="body1" paragraph>
        I'm a passionate software engineer with expertise in web development. 
        I specialize in creating responsive and user-friendly applications 
        using modern technologies like React, Next.js, and Material-UI.
      </Typography>
      <Typography variant="body1" paragraph>
        With a strong foundation in computer science and years of industry experience, 
        I'm always excited to take on new challenges and create innovative solutions.
      </Typography>
    </Paper>
  </Box>
);

export default About;