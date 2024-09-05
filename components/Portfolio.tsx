import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'Witz Africa',    
    description: 'Html, Css, JavaScript, Node,Express,MongoDB,Mongoose',
    image: './landingPage.jpg',
    link: 'https://github.com/Eliud254/witz-Africa',
  },
  {
    title: 'pantry_tracker_App ',
    description: 'Next js, Material UI,React ,Firebase, Node,CI/CD,OpenAi',
    image: '/pantry_tracker.jpg',
    link: 'https://pantrytracker2024.vercel.app/',
  },
  {
    title: 'AI Customer Support ',
    description: 'Nextjs,React, Material UI,Firebase,Node,Express Open Ai,Pincone',
    image: '/Ai_support.jpg',
    link: 'https://ai-support-bot.vercel.app/',
  },

  {
    title: 'AI Flashcards & Stripe',
    description: 'Nextjs,React,Material UI,Firebase,Clerk,Node,Express,Stripe,Open AI,Clerk',
    image: '/flashcard.jpg',
    link: 'https://flashcards-zeta-ten.vercel.app/',
  },

  {
    title: 'AI Rate My Professor',
    description: 'React,Material UI, Nextjs,Clerk,Open AI,TypeScript,Node,Express,Pincone ,MongoDB',
    image: '/professor.jpg',
    link: 'https://rate-my-professor-rag-five.vercel.app/',
  },

  {
    title: 'Rilla-voice_ai',
    description: 'React,Nextjs,Typescript,Material UI,Python,Node,Express,MongonDB,OpenAI',
    image: '/rilla.jpg',
    link: 'https://rilla-voice-ai.vercel.app/',
  },
  
  {
  title: 'Meal planner AI',
    description: 'Coming Soon',
    image:'./meal.jpg',
    link: '',
  },
  // Add more projects as needed
];

const Portfolio: React.FC = () => (
  <Box>
    <Typography variant="h3" component="h1" gutterBottom>
      My Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {project.title}
              </Typography>
              <Typography>
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Portfolio;
