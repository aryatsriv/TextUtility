import './App.css'
import TopMenuBar from './shared/TopMenuBar'
import { Outlet } from 'react-router'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";

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
      selected: "#353A3A"// Background color for cards or containers
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

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="false" disableGutters>

        <TopMenuBar />
        <Outlet className="outlet-main" />
      </Container>
    </ThemeProvider>
  )
}

export default App
