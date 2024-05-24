import React, { useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import CalculatorForm from './components/CalculatorForm';
import Results from './components/Results';
import RecipeSelector from './components/RecipeSelector';
import Copyright from './components/Copyright';
import { Recipe } from './classes/Recipe';
import { Piziolo } from './classes/Piziolo';

import AppBar from './components/AppBar';


//  name, flour00Amount, semolinaAmount, saltAmount, waterAmount, yeastAmount, defaultBalls, defaultWeight
// FUTURE: can add more fields to the recipes class, like proofing time,cold/room temp water, etc.
const RECIPES = [
  new Recipe("Ooni-ColdProof", 607, 0, 18, 368, 1.4, 4, 250),
  new Recipe("Yaniv-ColdProof", 0.550, 0.050, 0.010, 0.360, 0.0014, 3, 330),
  new Recipe("Bonci-ColdProof", 1000, 50, 25, 700, 3, 3, 370),
  new Recipe("Coppola-Magazine", 590, 0, 12, 380, 1.75, 4, 250),
];
// FUTURE: will have a link/url to the recipe, and a description of the piziolo,maybe a picture
const PIZIOLOS = [
  new Piziolo("Cold Proof - Ooni", RECIPES[0]),
  new Piziolo("Yaniv ", RECIPES[1]),
  new Piziolo("Bonci ", RECIPES[2]),
  new Piziolo("Coppola Magazine ", RECIPES[3]),
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
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <AppBar />
     
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
 
  );
}

export default App;