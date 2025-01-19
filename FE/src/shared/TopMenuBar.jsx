import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TopMenuBar() {
  return (
    <Box sx={{ flexGrow: 1 ,padding:0,margin:0}}>
      <AppBar position="static" color="inherit" > 
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Text Case Converter
          </Typography>
          <Typography variant="h6" component="div" >
            REPORT ISSUE/SUGGEST FEATURES
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
