import React from 'react';
import { Typography, Box, Paper, useTheme, useMediaQuery } from '@mui/material';

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1e1e1e, #111)',
        minHeight: '100vh',
        padding: isMobile ? '20px' : '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: isMobile ? 2 : 4,
          maxWidth: '800px',
          width: '100%',
          color: 'white',
          overflowY: 'auto',
          maxHeight: isMobile ? '90vh' : 'none',
        }}
      >
        <Typography variant={isMobile ? "h4" : "h3"} component="h1" gutterBottom sx={{ color: '#fff' }}>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          I am Eliud Obure, a dedicated and innovative software engineer with over two years of experience developing high-quality, scalable solutions. My expertise spans across various technologies, including backend and frontend development, cloud infrastructure, and AI-driven applications. I am passionate about solving complex problems, with a focus on delivering impactful solutions for businesses and individuals alike.
        </Typography>
        <Typography variant="body1" paragraph>
          I am a certified Software Engineer from ALX Africa-Holberton, having completed an intensive 12-month training program. I'm also about to graduate with a Bachelor of Science in Information Technology from Zetech University later this year. My academic journey has equipped me with a strong foundation in IT, further strengthening my technical expertise.
        </Typography>
        <Typography variant="body1" paragraph>
          I have participated in several hackathons, including A2SV Ethiopia in 2023 and 2024, where I contributed to an Agritech project aimed at revolutionizing African agriculture. Additionally, I was a key contributor in building an AI Voice Chat system during the Headstarter hackathon, which showcases my experience in AI-powered applications.
        </Typography>
        <Typography variant="body1" paragraph>
          My technical skills encompass frontend technologies like JavaScript, HTML, CSS, Material UI, Next.js, and React, and backend development with Node.js, Express, and Python. I am proficient in databases such as Firebase, MongoDB, and MySQL. Other tools and frameworks I work with include Clerk, Pinecone, OpenAI, AWS, Git, and many more.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether working on a team or independently, I prioritize collaboration, continuous learning, and staying at the forefront of technology. My mission is to leverage technology to create innovative solutions that enhance lives and drive positive change across industries.
        </Typography>
        <Typography variant="body1" paragraph>
          Let's collaborate to turn your vision into reality.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;