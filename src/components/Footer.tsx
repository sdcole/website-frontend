'use client';

import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        bgcolor: '#000000',
        color: '#f4f4f9',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Saebastion Cole
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Software Engineer
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://github.com/sdcole"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#b8dbd9',
                '&:hover': {
                  bgcolor: 'rgba(184, 219, 217, 0.15)',
                  color: '#c7e3e1',
                },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#b8dbd9',
                '&:hover': {
                  bgcolor: 'rgba(184, 219, 217, 0.15)',
                  color: '#c7e3e1',
                },
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="mailto:saebastion@gmail.com"
              sx={{
                color: '#b8dbd9',
                '&:hover': {
                  bgcolor: 'rgba(184, 219, 217, 0.15)',
                  color: '#c7e3e1',
                },
              }}
            >
              <Email />
            </IconButton>
          </Stack>
        </Stack>
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '1px solid rgba(184, 219, 217, 0.2)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {currentYear} Saebastion Cole. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
