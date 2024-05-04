import React, { useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import CalculatorForm from './components/CalculatorForm';
import Results from './components/Results';
import RecipeSelector from './components/RecipeSelector';
import Copyright from './components/Copyright';
import { Recipe } from './classes/Recipe';
import { Piziolo } from './classes/Piziolo';

const RECIPES = [
  new Recipe("Recipe 1", 0.557, 0.050, 0.018, 0.368, 0.0014, 1, 250),
  new Recipe("Recipe 2", 0.520, 0.030, 0.020, 0.360, 0.0010, 3, 270),
];

const PIZIOLOS = [
  new Piziolo("Piziolo 1", RECIPES[0]),
  new Piziolo("Piziolo 2", RECIPES[1]),
];

function App() {
  const [selectedPiziolo, setSelectedPiziolo] = useState(0);
  const [numBalls, setNumBalls] = useState(PIZIOLOS[selectedPiziolo].getRecipe().defaultBalls);
  const [ballWeight, setBallWeight] = useState(PIZIOLOS[selectedPiziolo].getRecipe().defaultWeight);
  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    const recipe = PIZIOLOS[selectedPiziolo].getRecipe();
    const totalWeight = numBalls * ballWeight;
    const ingredients = recipe.calculateIngredients(totalWeight);
    setResults(ingredients);
};
const handleRecipeChange = (index) => {
  setSelectedPiziolo(index);
  setNumBalls(PIZIOLOS[index].getRecipe().defaultBalls);
  setBallWeight(PIZIOLOS[index].getRecipe().defaultWeight);
  setResults(null);
};


return (
  <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
          <Typography variant="h3" gutterBottom textAlign="center">
              Dough Calculator
          </Typography>
          <RecipeSelector selectedRecipe={selectedPiziolo} setSelectedRecipe={handleRecipeChange} recipes={PIZIOLOS} />
          <CalculatorForm numBalls={numBalls} setNumBalls={setNumBalls} ballWeight={ballWeight} setBallWeight={setBallWeight} />
          <Button variant="contained" onClick={handleCalculate} sx={{ mt: 2 }}>
              Calculate
          </Button>
          {results && <Results results={results} />}
          <Copyright />
      </Box>
  </Container>
);
}

export default App;