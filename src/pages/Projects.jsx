import React from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import lbrmss from '../assets/lbrmss.png';
import fc from '../assets/image.png';
import yt from '../assets/yt.png'
const projects = [
  {
    title: 'LBRMSS',
    subtitle: 'Lan Based Records Management and Scheduling System',
   
    image: lbrmss, // Replace with your image URL
  },
  {
    title: 'Youtube Channel Clone ',
    subtitle: 'A Web App Integrating Youtube API Key replicating youtube channels',
  
    image: yt, // Replace with your image URL
  },
  {
    title: 'Forbes College Website ',
    subtitle: 'A responsive website for managing college information',
   
    image: fc, // Replace with your image URL

  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        color: '#fff',
        padding:5,
      }}
    >
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          PROJECTS
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 500,
               
                  position: 'relative', // Set position to relative for overlay
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional: transparent background
                  backdropFilter: 'blur(5px)', // Optional: adds a blur effect
                }}
              >
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="450"
                  image={project.image} // Use the image from the project array
                />
                <Box
                  sx={{
                    position: 'absolute', // Position overlay absolutely
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the overlay
                    color: 'white',
                    padding: 4, // Add some padding for the text
                  }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2">
                    {project.subtitle}
                  </Typography>
                 
                </Box>
              
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
