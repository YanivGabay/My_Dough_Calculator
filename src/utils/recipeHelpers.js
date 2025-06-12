/**
 * 🔧 RECIPE HELPER UTILITIES
 * 
 * These utilities help you create recipes more easily
 */

/**
 * Calculate hydration percentage for a recipe
 * @param {Object} ingredients - Recipe ingredients object
 * @returns {string} - Hydration percentage as string (e.g., "65%")
 */
export const calculateHydration = (ingredients) => {
  const totalFlour = (ingredients.flour00 || 0) + (ingredients.semolina || 0);
  const water = ingredients.water || 0;
  
  if (totalFlour === 0) return "0%";
  
  const hydrationPercent = Math.round((water / totalFlour) * 100);
  return `${hydrationPercent}%`;
};

/**
 * Calculate total ingredient weight for a recipe
 * @param {Object} ingredients - Recipe ingredients object
 * @returns {number} - Total weight in grams
 */
export const calculateTotalWeight = (ingredients) => {
  return Object.values(ingredients).reduce((total, amount) => total + (amount || 0), 0);
};

/**
 * Recipe builder helper - automatically calculates hydration
 * @param {string} name - Recipe name
 * @param {Object} ingredients - Ingredients object
 * @param {number} defaultBalls - Default number of balls
 * @param {number} defaultWeight - Default weight per ball
 * @param {Object} options - Recipe options (hydration will be auto-calculated if not provided)
 * @returns {Object} - Complete recipe configuration
 */
export const buildRecipe = (name, ingredients, defaultBalls, defaultWeight, options = {}) => {
  const hydration = options.hydration || calculateHydration(ingredients);
  
  return {
    name,
    ingredients,
    defaultBalls,
    defaultWeight,
    options: {
      ...options,
      hydration
    }
  };
};

/**
 * Common ingredient presets for quick recipe building
 */
export const INGREDIENT_PRESETS = {
  // Basic Neapolitan ratios (per 1000g flour)
  NEAPOLITAN: {
    flour00: 1000,
    salt: 20,
    water: 600,
    yeast: 3,
    oliveOil: 30
  },
  
  // New York style ratios
  NEW_YORK: {
    flour00: 1000,
    salt: 20,
    water: 650,
    yeast: 4,
    oliveOil: 30,
    sugar: 10
  },
  
  // Roman style ratios
  ROMAN: {
    flour00: 1000,
    salt: 25,
    water: 700,
    yeast: 3,
    oliveOil: 20
  }
};

/**
 * Scale a preset recipe to desired flour amount
 * @param {Object} preset - Ingredient preset
 * @param {number} flourAmount - Desired flour amount in grams
 * @returns {Object} - Scaled ingredients
 */
export const scaleRecipe = (preset, flourAmount) => {
  const scale = flourAmount / preset.flour00;
  
  const scaled = {};
  Object.keys(preset).forEach(ingredient => {
    scaled[ingredient] = Math.round(preset[ingredient] * scale * 100) / 100;
  });
  
  return scaled;
};

/**
 * Example usage:
 * 
 * // Create a scaled Neapolitan recipe with 500g flour
 * const myIngredients = scaleRecipe(INGREDIENT_PRESETS.NEAPOLITAN, 500);
 * 
 * // Build a complete recipe
 * const myRecipe = buildRecipe(
 *   "My Custom Pizza",
 *   myIngredients,
 *   4,
 *   250,
 *   {
 *     proofingTime: "24 hours",
 *     proofType: "cold",
 *     description: "My custom pizza recipe",
 *     difficulty: "Intermediate",
 *     origin: "My Kitchen",
 *     temperature: "450°C"
 *   }
 * );
 */ 