// src/pages/Recommendations.jsx
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Paper
} from '@mui/material';

const Recommendations = ({ recommendations }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/Trenz-E-Mart/assets/Back.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 3,
          width: '100%',
          maxWidth: '1100px',
          backgroundColor: '#ffffffcc',
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center' }}
        >
          Recommended Looks
        </Typography>

        <Grid container spacing={3}>
          {recommendations.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{ height: 250, objectFit: 'contain', padding: 2 }} // 👈 full image
                />
                <CardContent>
                  <Typography variant="h6" align="center">{item.name}</Typography>
                  <Typography variant="body2" align="center">₹{item.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Recommendations;