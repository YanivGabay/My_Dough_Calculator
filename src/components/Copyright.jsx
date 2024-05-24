import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Copyright() {
    return (
        <Box
        sx={{ m: 4 }}
       
        textAlign="center" >
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="tobeadded">
                Yaniv Gabay
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        </Box>
    );
}

export default Copyright;
