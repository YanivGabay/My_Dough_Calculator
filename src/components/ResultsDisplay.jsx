import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  useTheme,
  alpha,
  Divider,
  LinearProgress,
  Paper,
} from '@mui/material';
import {
  RestaurantMenu,
  Grain,
  Opacity,
  LocalDining,
  Science,
  Timer,
  Thermostat,
  AccessTime,
  EmojiObjects,
  Kitchen,
  LocalFireDepartment,
  TouchApp,
} from '@mui/icons-material';
import { getAllProfessionalTips, getRecipeInsights } from '../utils/professionalTips';

const getIngredientIcon = (ingredient) => {
  const icons = {
    flour00: <Grain />,
    semolina: <Grain />,
    water: <Opacity />,
    salt: <LocalDining />,
    yeast: <Science />,
    oliveOil: <Opacity />,
    sugar: <LocalDining />,
  };
  return icons[ingredient] || <RestaurantMenu />;
};

const getIngredientColor = (ingredient, theme) => {
  const colors = {
    flour00: theme.palette.warning.main,
    semolina: theme.palette.warning.light,
    water: theme.palette.info.main,
    salt: theme.palette.grey[600],
    yeast: theme.palette.success.main,
    oliveOil: theme.palette.success.light,
    sugar: theme.palette.secondary.main,
  };
  return colors[ingredient] || theme.palette.primary.main;
};

const formatIngredientName = (ingredient) => {
  const names = {
    flour00: 'Tipo 00 Flour',
    semolina: 'Semolina Flour',
    water: 'Water',
    salt: 'Salt',
    yeast: 'Active Dry Yeast',
    oliveOil: 'Extra Virgin Olive Oil',
    sugar: 'Sugar',
  };
  return names[ingredient] || ingredient.replace(/([A-Z])/g, ' $1').trim();
};

const getIngredientUnit = (ingredient) => {
  return ingredient === 'water' ? 'ml' : 'g';
};

function ResultsDisplay({ results, recipe, numBalls, ballWeight }) {
  const theme = useTheme();
  
  // Separate ingredients from additional info
  const ingredients = Object.entries(results).filter(([key]) => 
    !['proofingTime', 'proofType', 'description', 'difficulty', 'origin', 'temperature', 'hydration'].includes(key)
  );
  
  const totalIngredientWeight = ingredients.reduce((sum, [_, value]) => sum + parseFloat(value), 0);
  
  // Create ingredients object for tips calculation
  const ingredientsObject = {};
  ingredients.forEach(([key, value]) => {
    ingredientsObject[key] = parseFloat(value);
  });
  
  // Get dynamic professional tips
  const professionalTips = getAllProfessionalTips(recipe, ingredientsObject, numBalls, ballWeight);
  const recipeInsights = getRecipeInsights(recipe, ingredientsObject, numBalls, ballWeight);

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontSize: { xs: '2rem', md: '2.5rem' },
          color: theme.palette.text.primary,
        }}
      >
        Your Perfect Recipe
      </Typography>

      {/* Recipe Summary Card */}
      <Card
        sx={{
          mb: 4,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
          border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        }}
      >
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 2, fontSize: '1.8rem' }}>
            Recipe Summary
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', mb: 3 }}>
            <Chip
              label={`${numBalls} Pizzas`}
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                background: theme.palette.primary.main,
                color: 'white',
                py: 1,
                px: 2,
              }}
            />
            <Chip
              label={`${ballWeight}g each`}
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                background: theme.palette.secondary.main,
                color: 'white',
                py: 1,
                px: 2,
              }}
            />
            <Chip
              label={`${numBalls * ballWeight}g total`}
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                background: theme.palette.text.primary,
                color: theme.palette.background.paper,
                py: 1,
                px: 2,
              }}
            />
          </Box>

          {/* Additional Recipe Info */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTime sx={{ color: theme.palette.info.main }} />
              <Typography variant="body2">
                {results.proofingTime} • {results.proofType} proof
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Thermostat sx={{ color: theme.palette.error.main }} />
              <Typography variant="body2">
                {results.temperature}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Ingredients Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {ingredients.map(([ingredient, amount]) => {
          const numericAmount = parseFloat(amount);
          const percentage = ((numericAmount / totalIngredientWeight) * 100).toFixed(1);
          const unit = getIngredientUnit(ingredient);
          const color = getIngredientColor(ingredient, theme);
          
          return (
            <Grid item xs={12} sm={6} md={4} key={ingredient}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  overflow: 'visible',
                  background: `linear-gradient(135deg, ${alpha(color, 0.1)}, ${alpha(color, 0.05)})`,
                  border: `2px solid ${alpha(color, 0.2)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 12px 40px ${alpha(color, 0.2)}`,
                  },
                }}
              >
                {/* Ingredient Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -15,
                    left: 20,
                    backgroundColor: color,
                    color: 'white',
                    borderRadius: '20px',
                    px: 2,
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    zIndex: 1,
                  }}
                >
                  {getIngredientIcon(ingredient)}
                  {percentage}%
                </Box>

                <CardContent sx={{ pt: 4, pb: 3, textAlign: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: color,
                      mb: 1,
                    }}
                  >
                    {numericAmount}
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '1.2rem',
                        fontWeight: 400,
                        ml: 0.5,
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {unit}
                    </Typography>
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      mb: 2,
                    }}
                  >
                    {formatIngredientName(ingredient)}
                  </Typography>

                  {/* Visual Progress Bar */}
                  <LinearProgress
                    variant="determinate"
                    value={parseFloat(percentage)}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: alpha(color, 0.2),
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: color,
                        borderRadius: 4,
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Recipe Insights */}
      {recipeInsights.length > 0 && (
        <Card
          sx={{
            mb: 4,
            background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
            border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '1.3rem',
                mb: 2,
                textAlign: 'center',
                color: theme.palette.secondary.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <EmojiObjects />
              Recipe Insights
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
              {recipeInsights.map((insight, index) => (
                <Chip
                  key={index}
                  label={insight.message}
                  sx={{
                    backgroundColor: insight.type === 'success' 
                      ? alpha(theme.palette.success.main, 0.1)
                      : insight.type === 'warning'
                      ? alpha(theme.palette.warning.main, 0.1)
                      : alpha(theme.palette.info.main, 0.1),
                    border: `1px solid ${
                      insight.type === 'success' 
                        ? alpha(theme.palette.success.main, 0.3)
                        : insight.type === 'warning'
                        ? alpha(theme.palette.warning.main, 0.3)
                        : alpha(theme.palette.info.main, 0.3)
                    }`,
                    color: theme.palette.text.primary,
                    py: 1,
                    fontSize: '0.9rem',
                  }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Dynamic Professional Tips */}
      <Card
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.info.main, 0.1)}, ${alpha(theme.palette.info.main, 0.05)})`,
          border: `1px solid ${alpha(theme.palette.info.main, 0.2)}`,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: '1.5rem',
              mb: 3,
              textAlign: 'center',
              color: theme.palette.info.main,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <Timer />
            Professional Tips - {recipe.name}
          </Typography>

          <Grid container spacing={3}>
            {/* Mixing Tips */}
            <Grid item xs={12} md={6} lg={3}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: alpha(theme.palette.success.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    color: theme.palette.success.main,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Kitchen sx={{ fontSize: '1.2rem' }} />
                  Mixing
                </Typography>
                <Box sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {professionalTips.mixing.map((tip, index) => (
                    <Typography 
                      key={index} 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 0.5, fontSize: '0.85rem' }}
                    >
                      {tip}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* Proofing Tips */}
            <Grid item xs={12} md={6} lg={3}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: alpha(theme.palette.warning.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.warning.main, 0.2)}`,
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    color: theme.palette.warning.main,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Timer sx={{ fontSize: '1.2rem' }} />
                  Proofing
                </Typography>
                <Box sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {professionalTips.proofing.map((tip, index) => (
                    <Typography 
                      key={index} 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 0.5, fontSize: '0.85rem' }}
                    >
                      {tip}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* Baking Tips */}
            <Grid item xs={12} md={6} lg={3}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: alpha(theme.palette.error.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.error.main, 0.2)}`,
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    color: theme.palette.error.main,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <LocalFireDepartment sx={{ fontSize: '1.2rem' }} />
                  Baking
                </Typography>
                <Box sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {professionalTips.baking.map((tip, index) => (
                    <Typography 
                      key={index} 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 0.5, fontSize: '0.85rem' }}
                    >
                      {tip}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* Handling Tips */}
            <Grid item xs={12} md={6} lg={3}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    color: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <TouchApp sx={{ fontSize: '1.2rem' }} />
                  Handling
                </Typography>
                <Box sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {professionalTips.handling.map((tip, index) => (
                    <Typography 
                      key={index} 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 0.5, fontSize: '0.85rem' }}
                    >
                      {tip}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ResultsDisplay; 