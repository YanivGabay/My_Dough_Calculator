/**
 * 🎯 DYNAMIC PROFESSIONAL TIPS SYSTEM
 * 
 * Generates recipe-specific professional advice based on:
 * - Hydration level
 * - Ingredients used
 * - Difficulty level
 * - Recipe origin/style
 * - Proofing type
 * - Temperature
 */

/**
 * Get mixing tips based on recipe characteristics
 */
export const getMixingTips = (recipe, ingredients) => {
  const hydrationLevel = parseFloat(recipe.options.hydration || '60%');
  const hasSugar = ingredients.sugar > 0;
  const hasOliveOil = ingredients.oliveOil > 0;
  const hasSemolina = ingredients.semolina > 0;
  
  let tips = [];
  
  // Base mixing order
  if (hasSugar) {
    tips.push("1. Dissolve yeast and sugar in warm water (35°C)");
    tips.push("2. Wait 5-10 minutes for yeast to foam");
  } else {
    tips.push("1. Dissolve yeast in warm water (35°C)");
    tips.push("2. Wait 5 minutes to activate");
  }
  
  if (hasSemolina) {
    tips.push("3. Mix flours together first");
    tips.push("4. Add yeast mixture and combine");
  } else {
    tips.push("3. Add flour gradually while mixing");
  }
  
  tips.push("4. Add salt (keep away from direct yeast contact)");
  
  if (hasOliveOil) {
    tips.push("5. Add olive oil and knead until smooth");
  }
  
  // Hydration-specific advice
  if (hydrationLevel > 70) {
    tips.push("⚠️ High hydration: Use wet hands, expect sticky dough");
    tips.push("🕐 Longer bulk fermentation needed");
  } else if (hydrationLevel < 60) {
    tips.push("💪 Lower hydration: Knead vigorously for gluten development");
    tips.push("⏰ May need extra kneading time (15-20 min)");
  }
  
  return tips;
};

/**
 * Get proofing tips based on recipe and conditions
 */
export const getProofingTips = (recipe, ingredients, numBalls) => {
  const { proofType, proofingTime, difficulty, hydration } = recipe.options;
  const hydrationLevel = parseFloat(hydration || '60%');
  
  let tips = [];
  
  if (proofType === 'cold') {
    tips.push("🧊 Cold Fermentation Benefits:");
    tips.push("• Develops complex flavors");
    tips.push("• Easier to handle and shape");
    tips.push("• Can extend up to 72 hours");
    
    if (difficulty === 'Advanced') {
      tips.push("👨‍🍳 Pro tip: Remove 30-60 min before shaping");
    }
    
    if (hydrationLevel > 70) {
      tips.push("💡 High hydration + cold = perfect combination");
    }
  } else {
    tips.push("🌡️ Room Temperature Proofing:");
    tips.push("• Faster fermentation");
    tips.push("• Watch for doubled size");
    tips.push("• Ideal temp: 24-26°C");
    
    if (ingredients.sugar > 0) {
      tips.push("⚡ Sugar accelerates fermentation - watch closely");
    }
  }
  
  // Ball-specific advice
  if (numBalls > 6) {
    tips.push(`🏀 Making ${numBalls} balls: Shape all at once, then proof`);
  }
  
  tips.push(`⏱️ Total time: ${proofingTime}`);
  
  return tips;
};

/**
 * Get baking tips based on recipe style and temperature
 */
export const getBakingTips = (recipe, ingredients, ballWeight) => {
  const { temperature, origin, difficulty } = recipe.options;
  const tempValue = parseInt(temperature);
  const isLightBall = ballWeight < 200;
  const isHeavyBall = ballWeight > 350;
  
  let tips = [];
  
  // Temperature-specific advice
  if (tempValue > 450) {
    tips.push("🔥 High Heat Baking:");
    tips.push("• Preheat pizza stone for 45+ minutes");
    tips.push("• Work quickly - dough cooks fast");
    tips.push("• 60-90 seconds total bake time");
    tips.push("• Watch for leopard spotting");
  } else if (tempValue > 300) {
    tips.push("🌡️ Medium-High Heat:");
    tips.push("• Preheat oven and stone well");
    tips.push("• 2-4 minutes bake time");
    tips.push("• Perfect for home ovens");
  } else {
    tips.push("🏠 Home Oven Baking:");
    tips.push("• Longer bake time (8-12 minutes)");
    tips.push("• Use bottom rack for crispy base");
    tips.push("• Consider par-baking crust");
  }
  
  // Style-specific tips
  if (origin.includes('Naples') || origin.includes('Neapolitan')) {
    tips.push("🇮🇹 Neapolitan Style:");
    tips.push("• Thin center, puffy cornicione");
    tips.push("• Minimal toppings");
    tips.push("• San Marzano tomatoes ideal");
  } else if (origin.includes('New York')) {
    tips.push("🗽 New York Style:");
    tips.push("• Stretch thin and even");
    tips.push("• Foldable when done");
    tips.push("• Generous cheese coverage");
  } else if (origin.includes('Roman') || origin.includes('Rome')) {
    tips.push("🏛️ Roman Style:");
    tips.push("• Ultra-thin and crispy");
    tips.push("• Minimal sauce");
    tips.push("• Creative toppings welcome");
  }
  
  // Weight-specific advice
  if (isLightBall) {
    tips.push("🪶 Light balls: Stretch very thin, quick bake");
  } else if (isHeavyBall) {
    tips.push("🍞 Heavy balls: Thicker crust, longer bake time");
  }
  
  // Special ingredients
  if (ingredients.sugar > 0) {
    tips.push("🍯 Sugar content: Watch for faster browning");
  }
  
  if (ingredients.oliveOil > 25) {
    tips.push("🫒 High oil content: Extra crispy bottom expected");
  }
  
  return tips;
};

/**
 * Get handling tips based on recipe difficulty and characteristics
 */
export const getHandlingTips = (recipe, ingredients, numBalls, ballWeight) => {
  const { difficulty, hydration } = recipe.options;
  const hydrationLevel = parseFloat(hydration || '60%');
  
  let tips = [];
  
  if (difficulty === 'Beginner') {
    tips.push("👶 Beginner-Friendly:");
    tips.push("• Don't worry about perfect circles");
    tips.push("• Use plenty of flour for dusting");
    tips.push("• Practice makes perfect!");
  } else if (difficulty === 'Intermediate') {
    tips.push("🎯 Intermediate Techniques:");
    tips.push("• Focus on even thickness");
    tips.push("• Learn the windowpane test");
    tips.push("• Shape with confidence");
  } else {
    tips.push("🎖️ Advanced Techniques:");
    tips.push("• Master the slap and fold");
    tips.push("• Perfect your shaping technique");
    tips.push("• Time and temperature precision matters");
  }
  
  if (hydrationLevel > 70) {
    tips.push("💧 High Hydration Handling:");
    tips.push("• Use wet hands to prevent sticking");
    tips.push("• Gentle stretching motions");
    tips.push("• Don't over-flour the surface");
  }
  
  if (numBalls === 1) {
    tips.push("🍕 Single large pizza: Great for sharing!");
  } else if (numBalls > 8) {
    tips.push("🎉 Pizza party prep: Shape and sauce ahead of time");
  }
  
  return tips;
};

/**
 * Get all professional tips for a recipe
 */
export const getAllProfessionalTips = (recipe, ingredients, numBalls, ballWeight) => {
  return {
    mixing: getMixingTips(recipe, ingredients),
    proofing: getProofingTips(recipe, ingredients, numBalls),
    baking: getBakingTips(recipe, ingredients, ballWeight),
    handling: getHandlingTips(recipe, ingredients, numBalls, ballWeight)
  };
};

/**
 * Get a summary of key recipe characteristics for quick reference
 */
export const getRecipeInsights = (recipe, ingredients, numBalls, ballWeight) => {
  const hydrationLevel = parseFloat(recipe.options.hydration || '60%');
  const totalDoughWeight = numBalls * ballWeight;
  
  const insights = [];
  
  // Hydration insights
  if (hydrationLevel > 75) {
    insights.push({ 
      type: 'info', 
      message: 'Very high hydration - expect incredibly light, airy texture' 
    });
  } else if (hydrationLevel > 65) {
    insights.push({ 
      type: 'success', 
      message: 'High hydration - perfect for Neapolitan style bubbles' 
    });
  } else if (hydrationLevel < 60) {
    insights.push({ 
      type: 'warning', 
      message: 'Lower hydration - dough will be firmer and easier to handle' 
    });
  }
  
  // Special ingredients insights
  if (ingredients.sugar > 0) {
    insights.push({ 
      type: 'info', 
      message: 'Sugar added - enhanced browning and flavor complexity' 
    });
  }
  
  if (ingredients.semolina > 0) {
    insights.push({ 
      type: 'success', 
      message: 'Semolina flour - adds texture and traditional Italian character' 
    });
  }
  
  // Size insights
  if (ballWeight > 400) {
    insights.push({ 
      type: 'warning', 
      message: 'Large pizza balls - perfect for thick crust or sharing' 
    });
  } else if (ballWeight < 150) {
    insights.push({ 
      type: 'info', 
      message: 'Small pizza balls - ideal for appetizers or personal pizzas' 
    });
  }
  
  return insights;
}; 