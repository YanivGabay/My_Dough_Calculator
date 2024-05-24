import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import Container from '@mui/material/Container';




const pages = ['Products', 'Pricing', 'Blog'];


function ResponsiveAppBar() {


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalPizzaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
             
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dough Helper
          </Typography>

          
        
        
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
