'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Code, Storage, Api, Psychology } from '@mui/icons-material';

const features = [
  {
    icon: <Storage fontSize="large" />,
    title: 'Database Design',
    description: 'Architecting efficient database schemas and optimizing queries for performance and scalability.',
  },
  {
    icon: <Api fontSize="large" />,
    title: 'API Development',
    description: 'Building robust RESTful APIs and integrating third-party services for seamless data flow.',
  },
  {
    icon: <Code fontSize="large" />,
    title: 'Backend Systems',
    description: 'Developing scalable server-side applications with clean, maintainable, and testable code.',
  },
  {
    icon: <Psychology fontSize="large" />,
    title: 'Problem Solving',
    description: 'Tackling complex data challenges with analytical thinking and efficient algorithms.',
  },
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 2,
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            mb: 8,
            textAlign: 'center',
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          I&apos;m a software engineer specializing in backend development and data architecture.
          I excel at designing efficient database systems, building reliable APIs, and creating scalable server-side solutions.
          Passionate about writing clean code and solving complex technical challenges.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Box
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
