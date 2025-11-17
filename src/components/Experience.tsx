'use client';

import { Box, Container, Typography, Paper, Chip, Stack } from '@mui/material';
import { WorkOutline } from '@mui/icons-material';

const experiences = [
  {
    company: 'Fiserv',
    role: 'Software Development Engineering - Professional II',
    period: 'Jul 2025 - Present',
    achievements: [
      'Maintain critical production workflows ensuring system reliability and uptime',
      'Modernize legacy systems with updated architecture and best practices',
      'Integrate and optimize CI/CD pipelines for streamlined deployment processes',
    ],
    technologies: ['C#', '.NET', 'CI/CD', 'Azure DevOps', 'SQL Server'],
  },
  {
    company: 'Fiserv',
    role: 'Technology Analyst II',
    period: 'Jun 2024 - Jul 2025',
    achievements: [
      'Contributed to core banking platform development and maintenance',
      'Collaborated with cross-functional teams on technical solutions',
      'Supported production systems and resolved technical issues',
    ],
    technologies: ['C#', '.NET', 'SQL', 'REST APIs'],
  },
  {
    company: 'Fiserv',
    role: 'Technology Analyst',
    period: 'Jan 2023 - Jun 2024',
    achievements: [
      'Developed and maintained financial services applications',
      'Participated in code reviews and quality assurance processes',
      'Gained expertise in enterprise-level software development',
    ],
    technologies: ['C#', '.NET', 'SQL Server', 'Visual Studio'],
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
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
          Work Experience
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
          My professional journey and key contributions
        </Typography>

        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          {experiences.map((exp, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                pb: 6,
                '&:last-child': {
                  pb: 0,
                },
              }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '19px', md: '23px' },
                    top: '48px',
                    bottom: 0,
                    width: '2px',
                    bgcolor: 'secondary.main',
                    opacity: 0.3,
                  }}
                />
              )}

              <Box sx={{ display: 'flex', gap: 3 }}>
                {/* Timeline dot */}
                <Box
                  sx={{
                    mt: 1.5,
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    <WorkOutline />
                  </Box>
                </Box>

                {/* Content */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'space-between',
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      mb: 2,
                      gap: 1,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        {exp.role}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="p"
                        sx={{ color: 'primary.main', fontWeight: 500 }}
                      >
                        {exp.company}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {exp.period}
                    </Typography>
                  </Box>

                  <Box component="ul" sx={{ pl: 2.5, mb: 2 }}>
                    {exp.achievements.map((achievement, achIndex) => (
                      <Box
                        component="li"
                        key={achIndex}
                        sx={{
                          mb: 1,
                          color: 'text.secondary',
                          '&:last-child': { mb: 0 },
                        }}
                      >
                        <Typography variant="body2">{achievement}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {exp.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: 'secondary.main',
                          color: 'text.primary',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
