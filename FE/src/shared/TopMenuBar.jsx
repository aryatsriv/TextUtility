import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';

export default function TopMenuBar() {
  const theme = useTheme();
  return (
    <Box sx={{ padding: 0, margin: 0 }}>
      <AppBar elevation={0} position="static" sx={{ backgroundColor: theme.palette.background.paper }} >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ color: theme.palette.text.primary }}>
            Daily Text Utility
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
