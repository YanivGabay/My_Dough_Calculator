import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  ThemeProvider,
  CssBaseline,
  Fade,
  Slide,
  IconButton,
  Fab,
  Zoom,
} from '@mui/material';
import { 
  LightMode, 
  DarkMode, 
  LocalPizza,
  Restaurant,
  Timer,
  Scale,
} from '@mui/icons-material';

import { lightTheme, darkTheme } from './theme';
import HeroSection from './components/HeroSection';
import RecipeGallery from './components/RecipeGallery';
import CalculatorSection from './components/CalculatorSection';
import ResultsDisplay from './components/ResultsDisplay';
import Footer from './components/Footer';
import { piziolos } from './data/recipes';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedPiziolo, setSelectedPiziolo] = useState(0);
  const [numBalls, setNumBalls] = useState(piziolos[selectedPiziolo].getRecipe().defaultBalls);
  const [ballWeight, setBallWeight] = useState(piziolos[selectedPiziolo].getRecipe().defaultWeight);
  const [results, setResults] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const currentTheme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    // Update defaults when recipe changes
    const recipe = piziolos[selectedPiziolo].getRecipe();
    setNumBalls(recipe.defaultBalls);
    setBallWeight(recipe.defaultWeight);
    setResults(null);
    setShowResults(false);
    setCurrentStep(2);
  }, [selectedPiziolo]);

  const handleCalculateClick = () => {
    const recipe = piziolos[selectedPiziolo].getRecipe();
    const totalWeight = numBalls * ballWeight;
    const ingredients = recipe.calculateIngredients(totalWeight);
    
    setResults(ingredients);
    setShowResults(true);
    setCurrentStep(3);
    
    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 300);
  };

  const handleRecipeChange = (index) => {
    setSelectedPiziolo(index);
  };

  const resetCalculator = () => {
    setResults(null);
    setShowResults(false);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: currentTheme.palette.background.default,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3e%3cpath d=\'M20 20h60v60H20z\' fill=\'none\' stroke=\'%23FF6B35\' stroke-width=\'0.5\'/%3e%3c/svg%3e")',
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite',
            zIndex: 0,
          }}
        />

        {/* Theme Toggle */}
        <Zoom in timeout={1000}>
          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            sx={{
              position: 'fixed',
              top: 20,
              right: 20,
              zIndex: 1000,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Zoom>

        {/* Reset FAB */}
        {currentStep > 1 && (
          <Zoom in timeout={500}>
            <Fab
              onClick={resetCalculator}
              sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                zIndex: 1000,
                background: 'linear-gradient(45deg, #FF6B35, #FF8A65)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #E65100, #FF6B35)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Restaurant />
            </Fab>
          </Zoom>
        )}

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Hero Section */}
          <Fade in timeout={1000}>
            <Box>
              <HeroSection currentStep={currentStep} />
            </Box>
          </Fade>

          {/* Recipe Gallery */}
          <Slide direction="up" in timeout={1200}>
            <Box sx={{ mt: 6 }}>
              <RecipeGallery
                recipes={piziolos}
                selectedRecipe={selectedPiziolo}
                onRecipeSelect={handleRecipeChange}
                currentStep={currentStep}
              />
            </Box>
          </Slide>

          {/* Calculator Section */}
          {currentStep >= 2 && (
            <Slide direction="up" in timeout={1400}>
              <Box sx={{ mt: 6 }}>
                <CalculatorSection
                  numBalls={numBalls}
                  setNumBalls={setNumBalls}
                  ballWeight={ballWeight}
                  setBallWeight={setBallWeight}
                  onCalculate={handleCalculateClick}
                  selectedRecipe={piziolos[selectedPiziolo]}
                />
              </Box>
            </Slide>
          )}

          {/* Results Display */}
          {showResults && (
            <Fade in timeout={1000}>
              <Box id="results-section" sx={{ mt: 6 }}>
                <ResultsDisplay
                  results={results}
                  recipe={piziolos[selectedPiziolo].getRecipe()}
                  numBalls={numBalls}
                  ballWeight={ballWeight}
                />
              </Box>
            </Fade>
          )}

          {/* Footer */}
          <Box sx={{ mt: 8, mb: 4 }}>
            <Footer />
          </Box>
        </Container>


      </Box>
    </ThemeProvider>
  );
}

export default App;