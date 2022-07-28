import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SelectMenu from './SelectMenu';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{backgroundColor: '#F8F9FA', boxShadow : 'none', borderBottom : '1px solid lightgrey'}}>
        <Toolbar>
            {/* <MenuIcon /> */}
            <Typography variant="h6" color="#00A86B" fontWeight="bold">
                Sort<span style={{ color : '#8884D8'}}>Algorithms</span>
            </Typography>
          <SelectMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}