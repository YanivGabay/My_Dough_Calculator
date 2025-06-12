import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Slider,
  useTheme,
  alpha,
  Divider,
  Chip,
} from '@mui/material';
import {
  Calculate,
  LocalPizza,
  Scale,
  Add,
  Remove,
} from '@mui/icons-material';

function CalculatorSection({ 
  numBalls, 
  setNumBalls, 
  ballWeight, 
  setBallWeight, 
  onCalculate, 
  selectedRecipe 
}) {
  const theme = useTheme();
  const recipe = selectedRecipe.getRecipe();
  const totalWeight = numBalls * ballWeight;

  const handleBallsChange = (value) => {
    const newValue = Math.max(1, Math.min(20, value));
    setNumBalls(newValue);
  };

  const handleWeightChange = (value) => {
    const newValue = Math.max(50, Math.min(1000, value));
    setBallWeight(newValue);
  };

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
        Set Your Parameters
      </Typography>

      <Card
        sx={{
          maxWidth: 800,
          mx: 'auto',
          p: 2,
          background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.paper, 0.7)})`,
          backdropFilter: 'blur(20px)',
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Selected Recipe Display */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              label={`Recipe: ${selectedRecipe.name}`}
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                color: 'white',
                py: 1,
                px: 2,
              }}
            />
          </Box>

          <Grid container spacing={4}>
            {/* Number of Balls */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.text.primary,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <LocalPizza sx={{ color: theme.palette.primary.main }} />
                  Number of Pizza Balls
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Button
                    variant="outlined"
                    onClick={() => handleBallsChange(numBalls - 1)}
                    disabled={numBalls <= 1}
                    sx={{
                      minWidth: 48,
                      height: 48,
                      borderRadius: 3,
                      borderColor: theme.palette.primary.main,
                    }}
                  >
                    <Remove />
                  </Button>

                  <TextField
                    value={numBalls}
                    onChange={(e) => handleBallsChange(parseInt(e.target.value) || 1)}
                    type="number"
                    inputProps={{ min: 1, max: 20 }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        height: 60,
                        width: 100,
                      },
                    }}
                  />

                  <Button
                    variant="outlined"
                    onClick={() => handleBallsChange(numBalls + 1)}
                    disabled={numBalls >= 20}
                    sx={{
                      minWidth: 48,
                      height: 48,
                      borderRadius: 3,
                      borderColor: theme.palette.primary.main,
                    }}
                  >
                    <Add />
                  </Button>
                </Box>

                <Slider
                  value={numBalls}
                  onChange={(_, value) => handleBallsChange(value)}
                  min={1}
                  max={20}
                  marks={[
                    { value: 1, label: '1' },
                    { value: 5, label: '5' },
                    { value: 10, label: '10' },
                    { value: 15, label: '15' },
                    { value: 20, label: '20' },
                  ]}
                  sx={{
                    color: theme.palette.primary.main,
                    '& .MuiSlider-thumb': {
                      width: 24,
                      height: 24,
                      boxShadow: `0 0 10px ${alpha(theme.palette.primary.main, 0.5)}`,
                    },
                    '& .MuiSlider-track': {
                      height: 6,
                    },
                    '& .MuiSlider-rail': {
                      height: 6,
                    },
                  }}
                />
              </Box>
            </Grid>

            {/* Ball Weight */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.text.primary,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Scale sx={{ color: theme.palette.secondary.main }} />
                  Weight per Ball (grams)
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Button
                    variant="outlined"
                    onClick={() => handleWeightChange(ballWeight - 10)}
                    disabled={ballWeight <= 50}
                    sx={{
                      minWidth: 48,
                      height: 48,
                      borderRadius: 3,
                      borderColor: theme.palette.secondary.main,
                    }}
                  >
                    <Remove />
                  </Button>

                  <TextField
                    value={ballWeight}
                    onChange={(e) => handleWeightChange(parseInt(e.target.value) || 50)}
                    type="number"
                    inputProps={{ min: 50, max: 1000, step: 10 }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        height: 60,
                        width: 120,
                      },
                    }}
                  />

                  <Button
                    variant="outlined"
                    onClick={() => handleWeightChange(ballWeight + 10)}
                    disabled={ballWeight >= 1000}
                    sx={{
                      minWidth: 48,
                      height: 48,
                      borderRadius: 3,
                      borderColor: theme.palette.secondary.main,
                    }}
                  >
                    <Add />
                  </Button>
                </Box>

                <Slider
                  value={ballWeight}
                  onChange={(_, value) => handleWeightChange(value)}
                  min={50}
                  max={500}
                  step={10}
                  marks={[
                    { value: 50, label: '50g' },
                    { value: 150, label: '150g' },
                    { value: 250, label: '250g' },
                    { value: 350, label: '350g' },
                    { value: 500, label: '500g' },
                  ]}
                  sx={{
                    color: theme.palette.secondary.main,
                    '& .MuiSlider-thumb': {
                      width: 24,
                      height: 24,
                      boxShadow: `0 0 10px ${alpha(theme.palette.secondary.main, 0.5)}`,
                    },
                    '& .MuiSlider-track': {
                      height: 6,
                    },
                    '& .MuiSlider-rail': {
                      height: 6,
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Summary */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" sx={{ fontSize: '1.4rem', mb: 2 }}>
              Summary
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Total Pizzas
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                  {numBalls}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Each Ball
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.secondary.main }}>
                  {ballWeight}g
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Total Dough
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                  {totalWeight}g
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Calculate Button */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              onClick={onCalculate}
              size="large"
              startIcon={<Calculate />}
              sx={{
                fontSize: '1.2rem',
                fontWeight: 700,
                py: 2,
                px: 6,
                borderRadius: 4,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.3)}`,
                '&:hover': {
                  background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 12px 35px ${alpha(theme.palette.primary.main, 0.4)}`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              Calculate Ingredients
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CalculatorSection; 