'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email, Download } from '@mui/icons-material';
import axios from 'axios';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [nameText, setNameText] = useState('');
  const [nameTypingComplete, setNameTypingComplete] = useState(false);

  const fullText = 'Console.WriteLine("Hello World!");';
  const nameFullText = "Hello, I'm Saebastion";

  // Only start animations after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Fetch visitor count from API
    const fetchVisitorCount = async (): Promise<void> => {
      try {
        const response = await axios.post<number>('https://portfolio.meshservice.work/api/v1/visitor-tracker');
        const result = response.data;
        setVisitorCount(result);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setVisitorCount(0);
      }
    };

    fetchVisitorCount();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || animationComplete) return; // Stop animation once complete or not mounted

    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText.length < fullText.length) {
      // Typing phase
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
    } else if (!isDeleting && typedText.length === fullText.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypedText(fullText.slice(0, typedText.length - 1));
      }, 1500);
    } else if (isDeleting && typedText.length > 0) {
      // Deleting phase
      timeout = setTimeout(() => {
        setTypedText(typedText.slice(0, -1));
      }, 50);
    } else if (isDeleting && typedText.length === 0) {
      // Animation complete
      setAnimationComplete(true);
    }

    return () => clearTimeout(timeout);
  }, [mounted, typedText, fullText, animationComplete, isDeleting]);

  // Type name after first animation completes
  useEffect(() => {
    if (!animationComplete || nameTypingComplete) return;

    let timeout: NodeJS.Timeout;

    if (nameText.length < nameFullText.length) {
      timeout = setTimeout(() => {
        setNameText(nameFullText.slice(0, nameText.length + 1));
      }, 80);
    } else {
      setNameTypingComplete(true);
    }

    return () => clearTimeout(timeout);
  }, [nameText, nameFullText, animationComplete, nameTypingComplete]);
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #b8dbd9 0%, #586f7c 100%)',
        color: 'text.primary',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          {/* C# Code Structure */}
          <Box
            component="pre"
            sx={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' },
              margin: 0,
              mb: 1,
              userSelect: 'none',
            }}
          >
            <Box component="span" sx={{ color: '#0000ff', opacity: 0.4 }}>namespace</Box>
            <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}> Portfolio</Box>
            {'\n'}
            <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}>{'{'}</Box>
            {'\n'}
            <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}>{'  '}</Box>
            <Box component="span" sx={{ color: '#0000ff', opacity: 0.4 }}>public class</Box>
            <Box component="span" sx={{ color: '#2b91af', opacity: 0.4 }}> Program</Box>
            {'\n'}
            <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}>{'  {'}</Box>
            {'\n'}
            <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}>{'    '}</Box>
            <Box component="span" sx={{ color: '#0000ff', opacity: 0.4 }}>public static void</Box>
            <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}> Main(</Box>
            <Box component="span" sx={{ color: '#0000ff', opacity: 0.4 }}>string</Box>
            <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}>[] args)</Box>
            {'\n'}
            <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}>{'    {'}</Box>
          </Box>

          {/* Visitor Count - Indented with content */}
          <Box sx={{ pl: { xs: 6, sm: 8, md: 12 } }}>
            <Box
              component="pre"
              sx={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' },
                margin: 0,
                mb: 2,
                userSelect: 'none',
              }}
            >
              <Box component="span" sx={{ color: '#0000ff', opacity: 0.4 }}>int</Box>
              <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}> visitorCount = </Box>
              <Box component="span" sx={{ color: '#09885a', fontWeight: 600 }}>
                {visitorCount !== null ? visitorCount : '...'}
              </Box>
              <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}>{';'}</Box>
            </Box>
          </Box>

          {/* Hero Content Indented */}
          <Box sx={{ pl: { xs: 6, sm: 8, md: 12 } }}>
            {!animationComplete ? (
              // First typing animation - Console.WriteLine
              <Box
                component="pre"
                sx={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                  color: '#000000',
                  margin: 0,
                  minHeight: '2em',
                }}
              >
                {typedText}
                <Box
                  component="span"
                  sx={{
                    opacity: showCursor ? 1 : 0,
                    transition: 'opacity 0.1s',
                  }}
                >
                  |
                </Box>
              </Box>
            ) : !nameTypingComplete ? (
              // Second typing animation - Name
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                }}
              >
                {nameText}
                <Box
                  component="span"
                  sx={{
                    opacity: showCursor ? 1 : 0,
                    transition: 'opacity 0.1s',
                  }}
                >
                  |
                </Box>
              </Typography>
            ) : (
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                }}
              >
                {nameText}
              </Typography>
            )}
            {nameTypingComplete && (
              <>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    mb: 4,
                    fontWeight: 600,
                    fontSize: { xs: '1.5rem', md: '2.5rem' },
                    opacity: 0.95,
                  }}
                >
                  Software Engineer
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    mb: 6,
                    maxWidth: '600px',
                    lineHeight: 1.8,
                    opacity: 0.9,
                  }}
                >
                  Building robust backend systems and data-driven solutions.
                  Specializing in database architecture, API development, and scalable server-side applications.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: '#000000',
                      color: '#f4f4f9',
                      '&:hover': {
                        bgcolor: '#1a1a1a',
                      },
                    }}
                    href="#projects"
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#000000',
                      color: '#000000',
                      borderWidth: 2,
                      '&:hover': {
                        borderColor: '#000000',
                        borderWidth: 2,
                        bgcolor: 'rgba(0, 0, 0, 0.05)',
                      },
                    }}
                    href="#contact"
                  >
                    Contact Me
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Download />}
                    sx={{
                      borderColor: '#000000',
                      color: '#000000',
                      borderWidth: 2,
                      '&:hover': {
                        borderColor: '#000000',
                        borderWidth: 2,
                        bgcolor: 'rgba(0, 0, 0, 0.05)',
                      },
                    }}
                    href="/resume.pdf"
                    download
                  >
                    Resume
                  </Button>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Button
                    href="https://github.com/sdcole"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'text.primary', minWidth: 'auto', p: 1 }}
                  >
                    <GitHub fontSize="large" />
                  </Button>
                  <Button
                    href="https://linkedin.com/in/saebastion-cole"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'text.primary', minWidth: 'auto', p: 1 }}
                  >
                    <LinkedIn fontSize="large" />
                  </Button>
                  <Button
                    href="mailto:saebastion@gmail.com"
                    sx={{ color: 'text.primary', minWidth: 'auto', p: 1 }}
                  >
                    <Email fontSize="large" />
                  </Button>
                </Stack>
              </>
            )}
          </Box>

          {/* Closing C# Code Braces */}
          <Box
            component="pre"
            sx={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' },
              margin: 0,
              mt: 1,
              userSelect: 'none',
            }}
          >
            <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}>{'    }'}</Box>
            {'\n'}
            <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}>{'  }'}</Box>
            {'\n'}
            <Box component="span" sx={{ color: '#000000', opacity: 0.3 }}>{'}'}</Box>
            {nameTypingComplete && (
              <Box
                component="span"
                sx={{
                  opacity: showCursor ? 1 : 0,
                  transition: 'opacity 0.1s',
                }}
              >
                |
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
