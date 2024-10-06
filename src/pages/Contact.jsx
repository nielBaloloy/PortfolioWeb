import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHub from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212',
        color: '#fff',
        padding: 4,
        fontFamily: 'Poppins, sans-serif',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: 5 }}>
          Feel free to reach out to me using the form below or through the provided contact information.
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {/* Email */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <IconButton sx={{ color: '#FF1744' }}>
                <EmailIcon fontSize="large" />
              </IconButton>
              <Typography variant="body1">baloloycrisniel.com</Typography>
            </Box>
          </Grid>
          
          {/* Phone */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <IconButton sx={{ color: '#FF1744' }}>
                <GitHub fontSize="large" />
              </IconButton>
              <Typography variant="body1"  ><a href='https://github.com/nielBaloloy'sx={{ color: 'white',textDecoration:'none' }}>https://github.com/nielBaloloy</a></Typography>
            </Box>
          </Grid>
          
          {/* Location */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <IconButton sx={{ color: '#FF1744' }}>
                <LocationOnIcon fontSize="large" />
              </IconButton>
              <Typography variant="body1">Legazpi City, Albay Philippines</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Contact Form */}
       
      </Container>
    </Box>
  );
};

export default Contact;
