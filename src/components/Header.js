import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/events/GlobalSlice";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import EventSerachInput from "../features/events/EventSearchInput";
import fetchJsonp from "fetch-jsonp";


const pages = ['Organize', 'Help', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {

    const [query, setQuery] = useState('');
    const [debounceQuery, setDebounceQuery] = useState("");
    const [delay, setDelay] =  useState(500);

    useEffect(() => {

          var result = fetchJsonp('https://geolocation-db.com/jsonp', {
            jsonpCallbackFunction: 'callback'
          })
          result.then(function (response) {
            return response.json()
          }).then(function (json) {
            console.log('parsed json', json.city)
            dispatch(addTodo({"field":"userLocation","val":json.city}));
          }).catch(function (ex) {
            console.log('parsing failed', ex)
          })
        
    }, []); 



    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceQuery(query);
            
      
        }, delay);
    
        return () => clearTimeout(timer);
      }, [query, delay]);


      //Set keywork in state
      useEffect(() => {
        
        dispatch(addTodo({"field":"keyword","val":debounceQuery?debounceQuery:"all"}));
       
      }, [debounceQuery]);  


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

    const [userLocation, setUserLocation] = useState(null);
    const [userCity, setUserCity] = useState(null);
    const [userState, setUserState] = useState(null);
  
    const searchParam = useSelector((state) => state.global.globalstate);

    const dispatch = useDispatch();
  
    console.log(".header......"+JSON.stringify(searchParam));
    
    return (
      
        <header className="Header">
          
        <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            
            noWrap
          
           
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize:'1.2rem',
              letterSpacing: '.3rem',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <Link to="/">
            EVENTS</Link>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          <EventSerachInput
            value={query}
            onChangeText={e => {
            setQuery(e.target.value);
            }}
            
            />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
        </AppBar>

           
       
        </header>
    )
}

export default Header