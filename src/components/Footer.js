import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import AdbIcon from '@mui/icons-material/Adb';


const Footer = () => 
      
    <footer>
      <Container maxWidth="xl">
       
           <Toolbar style={{ justifyContent: "center" }}>
                 <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
         
                <Typography variant="caption">&copy; 2023 bkc-events.com</Typography>
           </Toolbar>
          
      </Container>
    
      </footer>

export default Footer;