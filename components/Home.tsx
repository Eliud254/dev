import React from 'react';
import { Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/system';

const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(to bottom, #1e1e1e, #111)',
  color: '#ffffff',
  textAlign: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const HeroText = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  lineHeight: 1.8,
  textAlign: 'center',
  maxWidth: '800px',
  marginBottom: theme.spacing(3),
  '&:hover': {
    color: '#ffffff',
    textShadow: '0px 0px 10px rgba(255, 255, 255, 0.9)',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
    lineHeight: 1.6,
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#333',
  padding: '10px 20px',
  fontSize: '1.2rem',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
  '&:hover': {
    backgroundColor: '#f2f2f2',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    padding: '8px 16px',
  },
}));

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HeroSection>
      <HeroText variant={isMobile ? "h2" : "h1"}>Hi, I&apos;m Eliud</HeroText>
      <SubText variant={isMobile ? "body1" : "h6"}>
        Passionate and experienced software engineer specializing in building innovative solutions that solve real-world problems
      </SubText>
      <Link href="/portfolio" passHref>
        <HeroButton>
          View My Work
        </HeroButton>
      </Link>
    </HeroSection>
  );
};

export default Home;