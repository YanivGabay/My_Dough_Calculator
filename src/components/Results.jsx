import React from 'react';
import { Box, Typography } from '@mui/material';

function Results({ results }) {
    const resultElements = Object.entries(results).map(([key, value]) => {
        // Determine if the value is numeric and needs a unit
        const unit = key === 'water' ? 'ml' : 'g';

        
        const isNumeric = !isNaN(parseFloat(value)) && isFinite(value); // Check if the value is numeric


        // Properly format the key for display
        const formattedKey = key.replace(/([A-Z])/g, ' $1').trim(); // Add space before capital letters
        const titleKey = formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);

        return (
            <Typography variant="body1" gutterBottom key={key}>
                {titleKey}: {value}{isNumeric ? unit : ''}
            </Typography>
        );
    });

    return (
        <Box mt={2} textAlign="center">
            {resultElements}
        </Box>
    );
}

export default Results;
