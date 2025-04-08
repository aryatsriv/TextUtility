import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from './AppBarStyling';

export default function TopMenuBar({ open, handleDrawerOpen }) {
  const theme = useTheme()
  return (
    <AppBar position="fixed"
      open={open}
      onClick={handleDrawerOpen}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: 'none'
      }}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          sx={{
            color: theme.palette.text.primary,
            mr: 2,
            ...(open && { display: 'none' })
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap sx={{ color: theme.palette.text.primary, marginLeft: 3 }}>
          Daily Utility
        </Typography>
        <Typography variant="h6" noWrap sx={{ color: theme.palette.text.primary, marginLeft: 3 }}>
          Report Issue
        </Typography>
      </Toolbar>
    </AppBar >
  );
}
