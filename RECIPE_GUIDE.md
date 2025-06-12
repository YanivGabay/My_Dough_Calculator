# 🍕 Pizza Recipe Management Guide

## Quick Start: Adding a New Recipe

Adding a new recipe is **super simple** and only requires editing **ONE file**: `src/data/recipes.js`

### Step 1: Open the recipes file
Navigate to: `src/data/recipes.js`

### Step 2: Add your recipe to the recipes array
Copy this template and modify the values:

```javascript
new Recipe(
  "Your Recipe Name",
  { 
    flour00: 600,        // Tipo 00 flour in grams
    semolina: 0,         // Semolina flour in grams (0 if not used)
    salt: 15,            // Salt in grams
    water: 400,          // Water in ml
    yeast: 2,            // Active dry yeast in grams
    oliveOil: 25,        // Extra virgin olive oil in grams (optional)
    sugar: 0             // Sugar in grams (0 if not used)
  },
  4,                     // Default number of pizza balls
  280,                   // Default weight per ball in grams
  { 
    proofingTime: "18 hours",     // How long to proof
    proofType: "cold",            // "cold" or "room"
    description: "Your description",
    difficulty: "Intermediate",   // "Beginner", "Intermediate", "Advanced"
    origin: "Your Kitchen",
    temperature: "460°C",         // Baking temperature
    hydration: "67%"              // Water percentage (can auto-calculate)
  }
),
```

### Step 3: Save the file
That's it! Your recipe will automatically appear in the app.

## Example: Adding a Sicilian Style Recipe

```javascript
new Recipe(
  "Sicilian Thick Crust",
  { 
    flour00: 500, 
    semolina: 100, 
    salt: 12, 
    water: 380, 
    yeast: 3, 
    oliveOil: 40 
  },
  2,      // Makes 2 large rectangular pizzas
  450,    // 450g each (thick crust needs more dough)
  { 
    proofingTime: "36 hours", 
    proofType: "cold",
    description: "Thick, airy Sicilian-style with crispy bottom",
    difficulty: "Advanced",
    origin: "Sicily, Italy",
    temperature: "230°C",
    hydration: "63%"
  }
),
```

## Understanding Recipe Structure

### Ingredients Object
- **flour00**: Tipo 00 flour (main flour)
- **semolina**: Semolina flour (adds texture, optional)
- **salt**: Sea salt or kosher salt
- **water**: Room temperature water (measured in ml)
- **yeast**: Active dry yeast
- **oliveOil**: Extra virgin olive oil (optional)
- **sugar**: Sugar for flavor and browning (optional)

### Recipe Options
- **proofingTime**: How long to let the dough rise ("12 hours", "24 hours", etc.)
- **proofType**: "cold" (refrigerator) or "room" (room temperature)
- **description**: Brief description of the pizza style
- **difficulty**: "Beginner", "Intermediate", or "Advanced"
- **origin**: Where the recipe originated
- **temperature**: Baking temperature
- **hydration**: Water-to-flour ratio percentage

## Pro Tips

### 1. Use Recipe Helpers (Advanced)
For easier recipe creation, you can use the helper utilities:

```javascript
import { scaleRecipe, INGREDIENT_PRESETS } from '../utils/recipeHelpers';

// Scale a Neapolitan recipe to 500g flour
const myIngredients = scaleRecipe(INGREDIENT_PRESETS.NEAPOLITAN, 500);

// Then use in your recipe
new Recipe("My Scaled Neapolitan", myIngredients, 4, 250, {
  // ... your options
});
```

### 2. Calculate Hydration Automatically
```javascript
import { calculateHydration } from '../utils/recipeHelpers';

const ingredients = { flour00: 500, water: 325 };
const hydration = calculateHydration(ingredients); // Returns "65%"
```

### 3. Common Hydration Levels
- **Low (55-60%)**: Crispy, thin crusts
- **Medium (60-65%)**: Classic pizza
- **High (65-75%)**: Light, airy, Neapolitan style
- **Very High (75%+)**: Focaccia-style, very wet dough

## Recipe Categories

### Classic Italian Styles
- **Neapolitan**: 60-65% hydration, high heat (485°C+)
- **Roman**: 70%+ hydration, lower heat (300°C)
- **Sicilian**: 60-65% hydration, thick crust

### American Styles
- **New York**: 60-65% hydration, foldable thin crust
- **Chicago Deep Dish**: 55-60% hydration, buttery thick crust
- **Detroit**: 70%+ hydration, rectangular, crispy edges

## Troubleshooting

### Recipe Not Appearing?
1. Check for syntax errors in `recipes.js`
2. Ensure the recipe is added to the `recipes` array
3. Make sure all required fields are included
4. Refresh the browser

### Calculations Seem Wrong?
1. Verify ingredient amounts are in correct units (grams/ml)
2. Check that flour amounts are realistic
3. Ensure hydration percentage makes sense

## Need Help?

The app will automatically:
- ✅ Calculate ingredient proportions
- ✅ Display recipe in the gallery
- ✅ Show all recipe details
- ✅ Include professional tips
- ✅ Handle different ball counts and weights

Just focus on creating great recipes! 🍕 