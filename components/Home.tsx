import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/system';

const HeroSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: 'linear-gradient(to bottom, #1e1e1e, #111)', // Dark gradient background
  color: '#ffffff',
  textAlign: 'center',
  padding: '0 20px',
});

const HeroText = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 'bold',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
  marginBottom: '20px',
});

const SubText = styled(Typography)({
  fontSize: '1.5rem',
  lineHeight: '1.8',
  textAlign: 'center',
  maxWidth: '800px', // Ensures the text doesn't stretch too wide, keeping it centered and organized
  marginBottom: '30px',
  '&:hover': {
    color: '#ffffff',
    textShadow: '0px 0px 10px rgba(255, 255, 255, 0.9)',
  },
});

const HeroButton = styled(Button)({
  backgroundColor: '#ffffff',
  color: '#333',
  padding: '10px 20px',
  fontSize: '1.2rem',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
  '&:hover': {
    backgroundColor: '#f2f2f2',
  },
});

const Home: React.FC = () => (
  <HeroSection>
    <HeroText variant="h1">Hi, I&apos;m Eliud</HeroText>
    <SubText variant="h6">
      Passionate and experienced software engineer specializing in building innovative solutions that solve real-world problems
    </SubText>
    <Link href="/portfolio" passHref>
      <HeroButton>
        View My Work
      </HeroButton>
    </Link>
  </HeroSection>
);

export default Home;
