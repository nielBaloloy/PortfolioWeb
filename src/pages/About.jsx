import React from 'react';
import { Box, Typography, Container,Grid } from '@mui/material';

const About = () => {

const techStack = [
    { name: 'HTML', logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
    { name: 'CSS', logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    { name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
    { name: 'Vue.js', logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg' },
    { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' }, // New PHP logo link
  { name: 'MySQL', logo: 'https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png' }, // New MySQL logo link
  ];
  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        color: '#fff',
        padding: 4,
        minHeight: '100vh', // Full height section
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center text vertically
        
      }}
    >
      <Container>
        <Typography variant="h4" align="left" gutterBottom style={{ fontWeight: 'bold' ,color:'#FF1744'}}>
          ABOUT
        </Typography>
        <Typography variant="h6" gutterBottom align="left">
          Welcome to my portfolio! I am <span style={{ fontWeight: 'bold' ,color:'#FF1744'}}>Cris Niel T. Baloloy</span>, a passionate and dedicated web developer with a strong background in creating dynamic and responsive websites. My journey into web development began with a fascination for coding and design, and it has evolved into a career that I truly love. I bring a comprehensive skill set to the table. My expertise lies in HTML, CSS, JavaScript, Vue.js, React, PHP, and MySQL, among other technologies. I am constantly learning and adapting to new tools and frameworks to stay ahead in this ever-evolving field.
        </Typography>
        <Typography variant="h6" mt={4} gutterBottom style={{ color:'#B1B1B1'}}>
          I am excited to bring your vision to life. Whether you need a simple landing page, a complex web application, or anything in between, I am here to help. Explore my portfolio to see some of my work, and feel free to get in touch if you have any questions or would like to discuss a project.
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 4 }}>
          Tech Stacks:
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 2 }}>
          {techStack.map((tech, index) => (
            <Grid item key={index}>
              <img src={tech.logo} alt={tech.name} width="50px" height="50px" title={tech.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
