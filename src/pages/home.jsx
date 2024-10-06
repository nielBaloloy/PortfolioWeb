import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'; 
import fc from '../assets/image.png'
import '../assets/home.css'
const home = () => {
  const handleDownload = () => {
    // This will trigger the download of the PDF file
    const link = document.createElement('a');
    link.href = '/public/CV-BALOLOY 2024.pdf'; // Replace this with the actual path to your CV file in the public folder
    link.download = 'Cris_Niel_Baloloy_CV.pdf'; // Optional: Define the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box className='container'
    sx={{
      height: '100vh', // Full viewport height
      width: '99vw',  // Full viewport width
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#121212', // Dark background as fallback
      
      backgroundSize: 'cover', // Ensures the background covers the whole area
      backgroundPosition: 'center', // Center the image
      backgroundRepeat: 'no-repeat', // Prevent tiling of the background
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      overflowX: 'hidden',
    }}
    >
      <Container >
        <Typography variant="h5" sx={{ fontWeight: 'bold'  }}>
          HELLO, I AM
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#FF1744' }}>
          CRIS NIEL BALOLOY
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
          Fullstack Developer
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: 6,
            backgroundColor: '#FF1744',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#f50057',
            },
          }}
          onClick={handleDownload} // Attach download handler here
        >
          Download my CV
        </Button>
        <Typography variant="body2" sx={{ marginTop: 30 ,textAlign:'center'}}>
          Getting Started
          <ArrowDownwardIcon
          sx={{ 
            display: 'block', 
            margin: '10px auto', 
            fontSize: '25px', 
            color: '#fff',
            animation: 'bounce 2s infinite', // Apply bounce animation
          }} // Styling for the arrow icon
        />
        </Typography>
        
      </Container>
    </Box>
  );
};

export default home;
