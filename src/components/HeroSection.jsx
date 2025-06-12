import React from 'react';
import {
  Box,
  Typography,
  Container,
  Stepper,
  Step,
  StepLabel,
  Chip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Restaurant,
  Calculate,
  LocalPizza,
} from '@mui/icons-material';

const steps = [
  { label: 'Choose Recipe', icon: <Restaurant /> },
  { label: 'Set Parameters', icon: <Calculate /> },
  { label: 'Get Results', icon: <LocalPizza /> },
];

function HeroSection({ currentStep }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: 8,
        pb: 6,
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Main Title */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
          fontWeight: 700,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, #FFD700)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          mb: 2,
          animation: 'pulse 2s ease-in-out infinite alternate',
        }}
      >
        PizzaMaestro
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.2rem', md: '1.5rem' },
          fontWeight: 400,
          color: theme.palette.text.secondary,
          mb: 1,
          maxWidth: '600px',
          mx: 'auto',
          opacity: 0.9,
        }}
      >
        Professional Pizza Dough Calculator
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '1rem', md: '1.1rem' },
          color: theme.palette.text.secondary,
          mb: 4,
          maxWidth: '500px',
          mx: 'auto',
          opacity: 0.8,
        }}
      >
        Master the art of authentic Italian pizza with precision ingredient calculations
      </Typography>

      {/* Step Indicator */}
      <Box
        sx={{
          maxWidth: '600px',
          mx: 'auto',
          mt: 4,
        }}
      >
        <Stepper
          activeStep={currentStep - 1}
          alternativeLabel
          sx={{
            '& .MuiStepLabel-label': {
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontWeight: 500,
            },
            '& .MuiStepIcon-root': {
              fontSize: '2rem',
              '&.Mui-active': {
                color: theme.palette.primary.main,
                transform: 'scale(1.2)',
                transition: 'all 0.3s ease',
              },
              '&.Mui-completed': {
                color: theme.palette.secondary.main,
              },
            },
          }}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                StepIconComponent={() => (
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: currentStep > index 
                        ? theme.palette.secondary.main
                        : currentStep === index + 1
                        ? theme.palette.primary.main
                        : alpha(theme.palette.text.secondary, 0.3),
                      color: 'white',
                      transition: 'all 0.3s ease',
                      transform: currentStep === index + 1 ? 'scale(1.2)' : 'scale(1)',
                      boxShadow: currentStep === index + 1 
                        ? `0 0 20px ${alpha(theme.palette.primary.main, 0.5)}`
                        : 'none',
                    }}
                  >
                    {step.icon}
                  </Box>
                )}
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Floating badges */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: { xs: '5%', md: '10%' },
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Chip
          label="Authentic Italian"
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
            color: 'white',
            fontWeight: 600,
            animation: 'float 3s ease-in-out infinite',
            animationDelay: '0s',
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: { xs: '5%', md: '10%' },
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Chip
          label="Professional Grade"
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            color: 'white',
            fontWeight: 600,
            animation: 'float 3s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />
      </Box>


    </Box>
  );
}

export default HeroSection; 