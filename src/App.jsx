import React, { useState } from 'react';
import { Container, Box, Typography, Button ,Grid} from '@mui/material';
import CalculatorForm from './components/CalculatorForm';
import Results from './components/Results';
import RecipeSelector from './components/RecipeSelector';
import Copyright from './components/Copyright';
import { Recipe } from './classes/Recipe';
import { Piziolo } from './classes/Piziolo';
import CalculateButton from './components/CalculateButton';
import AppBar from './components/AppBar';
import Logo from './components/Logo';

//  name, flour00Amount, semolinaAmount, saltAmount, waterAmount, yeastAmount, defaultBalls, defaultWeight
// FUTURE: can add more fields to the recipes class, like proofing time,cold/room temp water, etc.
const recipes = [
  new Recipe("Ooni-ColdProof", { flour00: 607, semolina: 0, salt: 18, water: 368, yeast: 1.4, oliveOil: 20 }, 4, 250, { proofingTime: "24 hours", proofType: "cold" }),
  new Recipe("Yaniv-ColdProof", { flour00: 550, semolina: 50, salt: 10, water: 360, yeast: 1.4, sugar: 15 }, 3, 330, { proofingTime: "48 hours", proofType: "cold" }),
  new Recipe("Bonci-ColdProof", { flour00: 1000, semolina: 50, salt: 25, water: 700, yeast: 3 }, 3, 370, { proofingTime: "12 hours", proofType: "room" }),
  new Recipe("Coppola-Magazine", { flour00: 590, semolina: 0, salt: 12, water: 380, yeast: 1.75 }, 4, 250, { proofingTime: "24 hours", proofType: "cold" })
];

const piziolos = [
  new Piziolo("Cold Proof - Ooni", recipes[0]),
  new Piziolo("Yaniv", recipes[1]),
  new Piziolo("Bonci", recipes[2]),
  new Piziolo("Coppola Magazine", recipes[3]),
];

function App() {
  const [selectedPiziolo, setSelectedPiziolo] = useState(0);
  const [numBalls, setNumBalls] = useState(piziolos[selectedPiziolo].getRecipe().defaultBalls);
  const [ballWeight, setBallWeight] = useState(piziolos[selectedPiziolo].getRecipe().defaultWeight);
  const [results, setResults] = useState(null);

  const handleCalculateClick = () => {
    console.log("Calculating ingredients for ", piziolos[selectedPiziolo].name);
    const recipe = piziolos[selectedPiziolo].getRecipe();
    console.log("Recipe: ", recipe);
    const totalWeight = numBalls * ballWeight;
    console.log("Total weight: ", totalWeight);
    const ingredients = recipe.calculateIngredients(totalWeight);
    console.log("Ingredients: ", ingredients);
    setResults(ingredients);
    console.log("Results: ", ingredients);
  };
  const handleRecipeChange = (index) => {
    setSelectedPiziolo(index);
    setNumBalls(piziolos[index].getRecipe().defaultBalls);
    setBallWeight(piziolos[index].getRecipe().defaultWeight);
    setResults(null);
  };


  return (
    <Grid >
      <AppBar sx={{m: 6}} />
      <Logo />
      <RecipeSelector selectedRecipe={selectedPiziolo} setSelectedRecipe={handleRecipeChange} recipes={piziolos} />

      <CalculatorForm numBalls={numBalls} setNumBalls={setNumBalls} ballWeight={ballWeight} setBallWeight={setBallWeight} />
     <CalculateButton handleCalculateClick={handleCalculateClick} />
      {results && <Results results={results} />}
      <Copyright />
    </Grid>

  );
}

export default App;