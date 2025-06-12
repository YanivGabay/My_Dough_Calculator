import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF6B35', // Warm pizza orange
      light: '#FF8A65',
      dark: '#E65100',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2E7D32', // Fresh basil green
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    background: {
      default: 'linear-gradient(135deg, #FFF8E1 0%, #FFE0B2 50%, #FFCC02 100%)',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    accent: {
      gold: '#FFD700',
      cream: '#FFF8DC',
      tomato: '#FF6347',
    },
  },
  typography: {
    fontFamily: {
      heading: '"Playfair Display", serif',
      body: '"Inter", sans-serif',
    },
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      background: 'linear-gradient(45deg, #FF6B35, #FFD700)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: '1rem',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#2E7D32',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.8rem',
      color: '#FF6B35',
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '12px 32px',
          fontSize: '1.1rem',
          fontWeight: 600,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #FF6B35, #FF8A65)',
          '&:hover': {
            background: 'linear-gradient(45deg, #E65100, #FF6B35)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF6B35',
      light: '#FF8A65',
      dark: '#E65100',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#4CAF50',
      light: '#66BB6A',
      dark: '#2E7D32',
      contrastText: '#FFFFFF',
    },
    background: {
      default: 'linear-gradient(135deg, #1A1A1A 0%, #2D1B00 50%, #4A2500 100%)',
      paper: 'rgba(30, 30, 30, 0.9)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
    },
  },
  typography: lightTheme.typography,
  components: {
    ...lightTheme.components,
    MuiCard: {
      styleOverrides: {
        root: {
          ...lightTheme.components.MuiCard.styleOverrides.root,
          background: 'rgba(30, 30, 30, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: 'rgba(50, 50, 50, 0.8)',
            backdropFilter: 'blur(10px)',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: 'rgba(60, 60, 60, 0.9)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(70, 70, 70, 1)',
            },
          },
        },
      },
    },
  },
}); 