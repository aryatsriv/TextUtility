import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function TopMenuBar({ handleSetOpen }) {
  const theme = useTheme();
  return (
    <Box sx={{ padding: 0, margin: 0 }}>
      <AppBar elevation={0} position="static" sx={{ backgroundColor: theme.palette.background.paper }} >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={() => handleSetOpen()}
            sx={
              {
                mr: 2,
                color: theme.palette.text.primary,
              }
            }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ color: theme.palette.text.primary }}>
            Daily Text Tool
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
