import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import Box from '@mui/material/Box';
function RecipeSelector({ selectedRecipe, setSelectedRecipe, recipes }) {
    return (
        <Box sx={{m:2,textAlign:'center'}} >
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
        </Box>
    );
}

export default RecipeSelector;
