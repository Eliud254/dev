import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button, useTheme, useMediaQuery } from '@mui/material';

const projects = [
  {
    title: 'Witz Africa',    
    description: 'Html, Css, JavaScript, Node, Express, MongoDB, Mongoose',
    image: './landingPage.jpg',
    link: 'https://github.com/Eliud254/witz-Africa',
  },
  {
    title: 'Pantry Tracker App',
    description: 'Next.js, Material UI, React,React Camera Pro, Firebase,Python,TensorFlow, OpenAI API,',
    image: '/pantry_tracker.jpg',
    link: 'https://ai-pantry-tracker.vercel.app/',
  },
  {
    title: 'AI Customer Support',
    description: 'Next.js, React, Material UI,MongoDb, Node, Express, OpenAI ,AWS',
    image: '/Ai_support.jpg',
    link: 'https://ai-support-bot.vercel.app/',
  },
  
  {
    title: 'AI Rate My Professor',
    description: 'React, Material UI, Next.js, Clerk, OpenAI, Node, Express,Firebase',
    image: '/professor.jpg',
    link: 'https://rate-my-professor-rag-five.vercel.app/',
  },
  {
    title: 'Rilla-voice_ai',
    description: 'React, Next.js, TypeScript, Material UI, Python,Firebase, OpenAI',
    image: '/rilla.jpg',
    link: 'https://rilla-voice-ai.vercel.app/',
  },

  {
    title: 'Lio,Task Management App',
    description: 'Javascript ,Html,Css,Firebase',
    image: '/lio.jpg',
    link: 'https://github.com/Eliud254/Lio.git',
  },
  
  {
    title: 'Netflix Clone',
    description: 'Next.js, React, Material UI,Firebase, Node, Express,AWS',
    image: '/netflix.jpg',
    link: 'https://www.lescerveauxai.app/'
  },
  
  {
    title: 'Meal planner AI',
    description: 'Coming Soon',
    image: './meal.jpg',
    link: 'https://github.com/Eliud254/AI-Meal-Planner',
  },
];

const Portfolio: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ padding: isMobile ? 2 : 4 }}>
      <Typography variant={isMobile ? "h4" : "h3"} component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        My Projects
      </Typography>
      <Grid container spacing={isMobile ? 2 : 4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              }
            }}>
              <CardMedia
                component="img"
                height={isMobile ? "120" : "140"}
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant={isMobile ? "h6" : "h5"} component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  disabled={!project.link}
                  sx={{
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  {project.link ? 'View Project' : 'Coming Soon'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;