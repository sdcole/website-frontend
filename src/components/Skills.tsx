'use client';

import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Material-UI', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: '.NET / C#', level: 90 },
      { name: 'Oracle', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'ML.NET / PyTorch', level: 40 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Jenkins / Actions', level: 80 },
      { name: 'Docker', level: 65 },
      { name: 'REST APIs', level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <Box
      id="skills"
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
          Skills & Technologies
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
          Technologies and tools I use to bring ideas to life
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {skillCategories.map((category, categoryIndex) => (
            <Grid size={{ xs: 12, md: 4 }} key={categoryIndex}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'primary.main',
                  }}
                >
                  {category.category}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Typography variant="body1" fontWeight={500}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: 'action.hover',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
