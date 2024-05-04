import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Results({ results }) {
    return (
        <Box mt={2} textAlign="center">
            <Typography variant="body1" gutterBottom>
                Flour 00: {results.flour00}g
            </Typography>
            <Typography variant="body1" gutterBottom>
                Flour Semolina: {results.semolina}g
            </Typography>
            <Typography variant="body1" gutterBottom>
                Salt: {results.salt}g
            </Typography>
            <Typography variant="body1" gutterBottom>
                Water: {results.water}ml
            </Typography>
            <Typography variant="body1" gutterBottom>
                Yeast: {results.yeast}g
            </Typography>
        </Box>
    );
}

export default Results;
