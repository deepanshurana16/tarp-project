import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../Assets/vitlogo.png';

function Navbarforlogin() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* VIT logo */}
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              display: { xs: "flex", md: "flex" },
              width: 60,
              height: 60,
              mr: 2,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            VHOST
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbarforlogin;
