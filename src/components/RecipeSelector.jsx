import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function RecipeSelector({ selectedRecipe, setSelectedRecipe, recipes }) {
    return (
        <FormControl>
            <InputLabel id="recipe-label">Piziolo</InputLabel>
            <Select
                labelId="recipe-label"
                value={selectedRecipe}
                onChange={(e) => setSelectedRecipe(e.target.value)}
                label="Piziolo"
            >
                {recipes.map((piziolo, index) => (
                    <MenuItem key={index} value={index}>
                        {piziolo.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default RecipeSelector;
