import React from 'react';
import {
  Box,
  Typography,
  Container,
  Divider,
  useTheme,
  alpha,
  Link,
} from '@mui/material';
import {
  Restaurant,
  Favorite,
  Code,
} from '@mui/icons-material';

function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        mt: 8,
        py: 4,
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mb: 2,
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          >
            <Restaurant />
            PizzaMaestro
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              mb: 2,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Master the art of authentic Italian pizza making with precision calculations 
            and professional techniques. From Neapolitan classics to modern artisan styles.
          </Typography>
        </Box>

        <Divider sx={{ my: 3, opacity: 0.5 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            Made with{' '}
            <Favorite sx={{ fontSize: '1rem', color: theme.palette.error.main }} />{' '}
            for pizza lovers worldwide
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <Code sx={{ fontSize: '1rem' }} />
            © {currentYear} PizzaMaestro. Crafted with passion.
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography
            variant="caption"
            sx={{
              color: alpha(theme.palette.text.secondary, 0.7),
              fontSize: '0.8rem',
            }}
          >
            "Perfect pizza begins with perfect dough" - Traditional Italian saying
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 