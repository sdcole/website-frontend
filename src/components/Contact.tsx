'use client';

import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import { Email, LocationOn } from '@mui/icons-material';

const contactInfo = [
  {
    icon: <Email fontSize="large" />,
    title: 'Email',
    value: 'saebastion@gmail.com',
    link: 'mailto:saebastion@gmail.com',
  },
  {
    icon: <LocationOn fontSize="large" />,
    title: 'Location',
    value: 'Omaha Nebraska, USA',
    link: null,
  },
];

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        bgcolor: 'background.default',
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
          Get In Touch
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
          Have a project in mind or want to collaborate? Feel free to reach out!
        </Typography>
        <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
          <Stack spacing={3}>
            {contactInfo.map((info, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateX(8px)',
                  },
                  ...(info.link && {
                    cursor: 'pointer',
                  }),
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                component={info.link ? 'a' : 'div'}
                href={info.link || undefined}
              >
                <Box sx={{ color: 'primary.main' }}>{info.icon}</Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {info.title}
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {info.value}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
