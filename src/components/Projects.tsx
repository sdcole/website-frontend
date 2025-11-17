'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { Launch, GitHub } from '@mui/icons-material';

const projects = [
  {
    title: 'Stock Monitor Platform',
    description:
      'A full-featured near real time stock monitoring dashboard that allows you to view and track current NYSE stocks and asking oLamma models what the thought on the recent performance is. Using ASP.NET API backend with a React frontend, it provides stock data visualization and trading capabilities via the AlpacaAPI.',
    technologies: ['React', 'TypeScript', 'C#', 'ASP.NET API', 'AlpacaAPI', 'PostgreSQL'],
    liveUrl: 'https://trading.meshservice.work',
    repositories: [
      { label: 'Frontend', url: 'https://github.com/sdcole/stock-trader-web' },
      { label: 'Backend', url: 'https://github.com/sdcole/stock-trader-api' },
      { label: 'Stock Data Loader', url: 'https://github.com/sdcole/stock-integrity-console' },
      { label: 'RestAPI', url: 'https://github.com/sdcole/stock-rest-api'},
      { label: 'Stock Integrity', url: 'https://github.com/sdcole/stock-integrity-console'},
    ],
  },
  {
    title: 'Roullette Game',
    description:
      'Physical game created with utilizing microcontrollers, relays, 3D Modeling, LCD Screens and more.',
    technologies: ['C++', 'Microcontrollers', 'CAD', '3DPrinting'],
    repositories: [
      { label: 'Code', url: 'https://github.com/sdcole/roullette' },
    ],
  },
];

export default function Projects() {
  return (
    <Box
      id="projects"
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
          Featured Projects
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
          Here are some of my recent projects that showcase my skills and experience
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0, flexWrap: 'wrap', gap: 1 }}>
                  {project.liveUrl && (
                    <Button
                      size="small"
                      startIcon={<Launch />}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.repositories.map((repo, repoIndex) => (
                    <Button
                      key={repoIndex}
                      size="small"
                      startIcon={<GitHub />}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.label}
                    </Button>
                  ))}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
