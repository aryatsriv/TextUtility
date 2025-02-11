import './App.css'
import theme from './shared/theme.js'
import { ThemeProvider } from '@mui/material/styles'
import { Box, Container, CssBaseline, styled, Typography } from '@mui/material'
import { useState } from 'react'
import StartPage from './StartPage.jsx'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="false" disableGutters>
        <StartPage />
      </Container>
    </ThemeProvider>
  )
}

export default App
