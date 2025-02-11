import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Primary color
    },
    secondary: {
      main: "#dc004e", // Secondary color
    },
    background: {
      default: "#f7f7f7", // Default background color
      paper: "#ffffff",
      selected: "#1976D2"// Background color for cards or containers
    },
    text: {
      primary: "#000000", // Primary text color
      secondary: "#555555",
      selected: '#FFFFFF'
      // Secondary text color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      color: "#333333",
    },
  },
  spacing: 8, // Default spacing unit (1 = 8px)
});

export default theme
