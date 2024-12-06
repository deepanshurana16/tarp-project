import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/vitlogo.png';
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import { doSignOut } from '../firebase/auth'



function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
 
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
   
  

  return (
    <AppBar position="static" sx={{backgroundColor : "#1976d2"}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        
      <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              display: { xs: "none", md: "flex" },
              width: 60,
              height: 60,
              mr: 1,
            }}
          />
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
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

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={()=>navigate("/")}>Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center"onClick={()=>navigate("/about")}>About</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center"onClick={()=>navigate("/complain")}>Complain</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center"onClick={()=>navigate("/olx")}>Buy&Sell</Typography>
              </MenuItem>

              {
                userLoggedIn
                ?
                <>

              <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" onClick={() => { doSignOut().then(() => { navigate('/login') }) }}>Logout</Typography>
              </MenuItem> 
              </>
                
                
                :
                <></>
              }
              
              
            
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
         VITHOSTELS
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
            <Button
              onClick={()=>navigate("/")}
              sx={{ my: 2, color: 'white', display: 'block' , ":hover" : {color : "blanchedalmond"}}}
            >
             Home
            </Button>
            <Button
              onClick={()=>navigate("/about")}
              sx={{ my: 2, color: 'white', display: 'block' , ":hover" : {color : "blanchedalmond"} }}
            >
             About
            </Button>
            <Button
              onClick={()=>navigate("/complain")}
              sx={{ my: 2, color: 'white', display: 'block' , ":hover" : {color : "blanchedalmond"} }}
            >
             Complain
            </Button>
            <Button
              onClick={()=>navigate("/olx")}
              sx={{ my: 2, color: 'white', display: 'block' , ":hover" : {color : "blanchedalmond"} }}
            >
             Buy&Sell
            </Button>

            {
                userLoggedIn
                ?
                <>
              <Button
               onClick={() => { doSignOut().then(() => { navigate('/login') }) }}
              sx={{ my: 2, color: 'white', display: 'block' , ":hover" : {color : "blanchedalmond"} }}
              >
              Logout
              </Button>
              </>
                
              :
                <></>
              }
       
        </Box>

       
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Navbar
