import { Recipe } from '../classes/Recipe';
import { Piziolo } from '../classes/Piziolo';

/**
 * 🍕 PIZZA RECIPES CONFIGURATION
 * 
 * To add a new recipe, simply add a new object to the recipes array below.
 * Each recipe follows this structure:
 * 
 * new Recipe(
 *   "Recipe Name",
 *   { 
 *     flour00: amount_in_grams,      // Tipo 00 flour
 *     semolina: amount_in_grams,     // Semolina flour (optional, use 0 if not needed)
 *     salt: amount_in_grams,         // Salt
 *     water: amount_in_ml,           // Water
 *     yeast: amount_in_grams,        // Active dry yeast
 *     oliveOil: amount_in_grams,     // Extra virgin olive oil (optional)
 *     sugar: amount_in_grams,        // Sugar (optional, use 0 if not needed)
 *   },
 *   default_number_of_balls,         // Default number of pizza balls
 *   default_weight_per_ball,         // Default weight per ball in grams
 *   {
 *     proofingTime: "24 hours",      // How long to proof the dough
 *     proofType: "cold",             // "cold" or "room" temperature proofing
 *     description: "Your description here",
 *     difficulty: "Beginner",        // "Beginner", "Intermediate", or "Advanced"
 *     origin: "Place of origin",
 *     temperature: "450°C",          // Baking temperature
 *     hydration: "65%"               // Hydration percentage
 *   }
 * )
 */

export const recipes = [
  new Recipe(
    "Neapolitan Ooni", 
    { 
      flour00: 607, 
      semolina: 0, 
      salt: 18, 
      water: 368, 
      yeast: 1.4, 
      oliveOil: 20 
    },
    4, 
    250, 
    { 
      proofingTime: "24 hours", 
      proofType: "cold",
      description: "Authentic Neapolitan style with perfect leoparding",
      difficulty: "Intermediate",
      origin: "Naples, Italy",
      temperature: "485°C",
      hydration: "60%"
    }
  ),
  
  new Recipe(
    "Yaniv Special", 
    { 
      flour00: 550, 
      semolina: 50, 
      salt: 10, 
      water: 360, 
      yeast: 1.4, 
      sugar: 15 
    },
    3, 
    330, 
    { 
      proofingTime: "48 hours", 
      proofType: "cold",
      description: "Extended fermentation for complex flavors",
      difficulty: "Advanced",
      origin: "Artisan Special",
      temperature: "450°C",
      hydration: "60%"
    }
  ),
  
  new Recipe(
    "Roman Bonci", 
    { 
      flour00: 1000, 
      semolina: 50, 
      salt: 25, 
      water: 700, 
      yeast: 3 
    },
    3, 
    370, 
    { 
      proofingTime: "12 hours", 
      proofType: "room",
      description: "Light, airy Roman-style pizza al taglio",
      difficulty: "Intermediate",
      origin: "Rome, Italy",
      temperature: "300°C",
      hydration: "70%"
    }
  ),
  
  new Recipe(
    "Coppola Magazine", 
    { 
      flour00: 590, 
      semolina: 0, 
      salt: 12, 
      water: 380, 
      yeast: 1.75 
    },
    4, 
    250, 
    { 
      proofingTime: "24 hours", 
      proofType: "cold",
      description: "Professional chef's signature blend",
      difficulty: "Beginner",
      origin: "Modern Classic",
      temperature: "400°C",
      hydration: "64%"
    }
  ),

  // 🚀 NEW RECIPE EXAMPLE - New York Style Pizza
  new Recipe(
    "New York Style Classic",
    { 
      flour00: 500, 
      semolina: 0, 
      salt: 10, 
      water: 325, 
      yeast: 2, 
      oliveOil: 15,
      sugar: 5
    },
    4,      // number of balls
    220,    // weight per ball
    { 
      proofingTime: "24 hours", 
      proofType: "cold",
      description: "Classic New York style with thin, foldable crust",
      difficulty: "Beginner",
      origin: "New York, USA",
      temperature: "260°C",
      hydration: "65%"
    }
  ),

  // 🚀 HIGH HYDRATION EXAMPLE - Super Wet Dough
  new Recipe(
    "Artisan High-Hydration",
    { 
      flour00: 500, 
      semolina: 100, 
      salt: 14, 
      water: 480, 
      yeast: 1, 
      oliveOil: 30,
      sugar: 0
    },
    2,      // fewer, larger pizzas
    450,    // heavy balls for thick crust
    { 
      proofingTime: "48 hours", 
      proofType: "cold",
      description: "Extremely light and airy with huge bubbles",
      difficulty: "Advanced",
      origin: "Modern Artisan",
      temperature: "500°C",
      hydration: "80%"
    }
  ),

  // 🚀 ADD YOUR NEW RECIPES HERE!
  // 
  // Just copy the structure above and modify the values!
  // Example template:
  // new Recipe(
  //   "Your Recipe Name",
  //   { 
  //     flour00: 600, 
  //     semolina: 0, 
  //     salt: 15, 
  //     water: 400, 
  //     yeast: 2, 
  //     oliveOil: 25 
  //   },
  //   4,      // number of balls
  //   280,    // weight per ball
  //   { 
  //     proofingTime: "18 hours", 
  //     proofType: "cold",
  //     description: "Your custom recipe description",
  //     difficulty: "Intermediate",
  //     origin: "Your Kitchen",
  //     temperature: "460°C",
  //     hydration: "67%"
  //   }
  // ),
];

// Create Piziolo instances (display wrappers for recipes)
export const piziolos = recipes.map((recipe, index) => 
  new Piziolo(recipe.name, recipe)
);

/**
 * 📝 HOW TO ADD A NEW RECIPE:
 * 
 * 1. Copy the example recipe structure above
 * 2. Replace the values with your recipe's ingredients and settings
 * 3. Add it to the recipes array above
 * 4. Save the file - that's it! Your new recipe will appear automatically
 * 
 * The app will automatically:
 * - Display your recipe in the recipe gallery
 * - Calculate proportions correctly
 * - Show all the recipe details
 * - Include it in the selection options
 */ 