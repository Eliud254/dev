import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1',
    image: '/placeholder-image-1.jpg',
    link: 'https://project1.com',
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2',
    image: '/placeholder-image-2.jpg',
    link: 'https://project2.com',
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
