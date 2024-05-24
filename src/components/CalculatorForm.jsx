import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function CalculatorForm({ numBalls, setNumBalls, ballWeight, setBallWeight }) {
    return (
        <Grid container spacing={2} sx={{textAlign:'center'}}>
            <Grid item xs={12}>
                <TextField
                    id="numBalls"
                    label="Number of Balls"
                    type="number"
                    value={numBalls}
                    onChange={(e) => setNumBalls(Number(e.target.value))}
                    inputProps={{ min: "1" }}
                    placeholder="Number of pizza balls"
                   
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="ballWeight"
                    label="Weight per Ball (g)"
                    type="number"
                    value={ballWeight}
                    onChange={(e) => setBallWeight(Number(e.target.value))}
                    inputProps={{ min: "1" }}
                    placeholder="Weight of each ball (g)"
                   
                />
            </Grid>
        </Grid>
    );
}

export default CalculatorForm;
