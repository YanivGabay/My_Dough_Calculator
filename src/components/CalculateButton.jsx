import { Box } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'

const CalculateButton = ({handleCalculateClick}) => {
  return (
    <Box sx={{m:2}} textAlign="center">
    <Button variant="contained" onClick={() => handleCalculateClick()}   >
    Calculate
  </Button>
    </Box>
  )
}

export default CalculateButton