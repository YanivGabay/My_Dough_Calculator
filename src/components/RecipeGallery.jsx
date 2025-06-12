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
  Badge,
  Divider,
} from '@mui/material';
import {
  Schedule,
  Thermostat,
  Star,
  LocationOn,
  WaterDrop,
  TrendingUp,
} from '@mui/icons-material';

const difficultyColors = {
  'Beginner': '#4CAF50',
  'Intermediate': '#FF9800',
  'Advanced': '#F44336',
};

const getDifficultyIcon = (difficulty) => {
  const count = difficulty === 'Beginner' ? 1 : difficulty === 'Intermediate' ? 2 : 3;
  return Array.from({ length: 3 }, (_, i) => (
    <Star
      key={i}
      sx={{
        fontSize: '1rem',
        color: i < count ? difficultyColors[difficulty] : alpha('#000', 0.2),
      }}
    />
  ));
};

function RecipeGallery({ recipes, selectedRecipe, onRecipeSelect, currentStep }) {
  const theme = useTheme();

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
        Choose Your Recipe
      </Typography>

      <Grid container spacing={3}>
        {recipes.map((piziolo, index) => {
          const recipe = piziolo.getRecipe();
          const isSelected = selectedRecipe === index;
          
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                onClick={() => onRecipeSelect(index)}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s ease-in-out',
                  border: isSelected 
                    ? `3px solid ${theme.palette.primary.main}`
                    : '1px solid transparent',
                  boxShadow: isSelected
                    ? `0 12px 40px ${alpha(theme.palette.primary.main, 0.3)}`
                    : theme.shadows[4],
                  '&:hover': {
                    transform: isSelected ? 'scale(1.05)' : 'scale(1.02)',
                    boxShadow: `0 16px 50px ${alpha(theme.palette.primary.main, 0.2)}`,
                  },
                  overflow: 'visible',
                }}
              >
                {/* Selection Badge */}
                {isSelected && (
                  <Badge
                    badgeContent="SELECTED"
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      zIndex: 2,
                      '& .MuiBadge-badge': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                        animation: 'pulse 2s infinite',
                      },
                    }}
                  />
                )}

                <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Recipe Name */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      mb: 1,
                      color: theme.palette.primary.main,
                      textAlign: 'center',
                    }}
                  >
                    {piziolo.name}
                  </Typography>

                  {/* Origin */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <LocationOn sx={{ fontSize: '1rem', mr: 0.5, color: theme.palette.text.secondary }} />
                    <Typography variant="body2" color="text.secondary">
                      {recipe.options.origin}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: 'center',
                      mb: 2,
                      color: theme.palette.text.secondary,
                      fontSize: '0.9rem',
                      lineHeight: 1.4,
                      flex: 1,
                    }}
                  >
                    {recipe.options.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  {/* Key Metrics */}
                  <Box sx={{ mb: 2 }}>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Box sx={{ textAlign: 'center' }}>
                          <WaterDrop sx={{ fontSize: '1.2rem', color: theme.palette.info.main, mb: 0.5 }} />
                          <Typography variant="caption" display="block" color="text.secondary">
                            Hydration
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {recipe.options.hydration}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Thermostat sx={{ fontSize: '1.2rem', color: theme.palette.error.main, mb: 0.5 }} />
                          <Typography variant="caption" display="block" color="text.secondary">
                            Temperature
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {recipe.options.temperature}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  {/* Proofing Info */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      p: 1,
                      bgcolor: alpha(theme.palette.info.main, 0.1),
                      borderRadius: 2,
                    }}
                  >
                    <Schedule sx={{ fontSize: '1rem', mr: 0.5, color: theme.palette.info.main }} />
                    <Typography variant="body2" color="text.secondary">
                      {recipe.options.proofingTime} • {recipe.options.proofType} proof
                    </Typography>
                  </Box>

                  {/* Difficulty */}
                  <Box sx={{ textAlign: 'center', mb: 1 }}>
                    <Typography variant="caption" display="block" color="text.secondary" mb={0.5}>
                      Difficulty
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.2 }}>
                      {getDifficultyIcon(recipe.options.difficulty)}
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: difficultyColors[recipe.options.difficulty],
                        fontWeight: 600,
                      }}
                    >
                      {recipe.options.difficulty}
                    </Typography>
                  </Box>

                  {/* Default specs */}
                  <Box
                    sx={{
                      mt: 'auto',
                      pt: 2,
                      borderTop: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                    }}
                  >
                    <Typography variant="caption" color="text.secondary" display="block" textAlign="center">
                      Default: {recipe.defaultBalls} balls × {recipe.defaultWeight}g
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>


    </Box>
  );
}

export default RecipeGallery; 