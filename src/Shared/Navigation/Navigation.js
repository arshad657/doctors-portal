import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import { Avatar, Container, Menu, MenuItem, Tooltip } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';



function Navigation() {
  const {user, logout} = useAuth()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <Box sx={{ flexGrow: 1 }}>
    
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Doctors Portal
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
              <Link to='/appointment' style={{textDecoration: 'none', color: 'black'}}>
                <Button color="inherit">Appointment</Button>
              </Link> <br />
              {
                user?.email ?
                <Box>
                  
                <Link to='/dashboard' style={{textDecoration: 'none', color: 'black'}}>
                <Button color="inherit" >Dashboard</Button>
                  </Link>
                  <br />
                <Button color = 'inherit' onClick={logout}>Logout</Button> 
                </Box>
                :
                <Link to='/login' style={{textDecoration: 'none', color: 'black'}}>
                  <Button color="inherit" >Login</Button>
              </Link>
              }
            </Menu>
          </Box>
          
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href='/'
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
            Doctors <br /> Portal
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to='/appointment' style={{textDecoration: 'none', color: 'white'}}>
                <Button color="inherit">Appointment</Button>
              </Link> <br />
              {
          user.email &&
          <Box>
            
          <Link to='/dashboard' style={{textDecoration: 'none', color: 'white', width:'auto'}}>
          <Button color="inherit" >Dashboard</Button>
            </Link>
            
          <Button color = 'inherit' onClick={logout}>Logout</Button> 
          </Box>
          
        }
          
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user.email? 
            <Box sx={{display:'flex'}}>
                 <Typography variant="subtitle2"  sx={{ flexGrow: 1}}>
                 Hello, <br /> {user.email}
               </Typography>
                
                </Box>
               :
               <Link to='/login' style={{textDecoration: 'none', color: 'white',width:'auto'}}>
                    <Button color="inherit" >Login</Button>
                </Link>

          }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </Box>
  )
}

export default Navigation