import './App.css'
import TopMenuBar from './shared/menu/TopMenuBar'
import { Outlet } from 'react-router'
import theme from './shared/theme.js'
import { ThemeProvider } from '@mui/material/styles'
import { Container, CssBaseline } from '@mui/material'
import { useState } from 'react'
import SideDrawer from './shared/menu/drawer/SideDrawer'



function App() {
const [open, setOpen] = useState(false)

  function handleSetOpen() {
    setOpen(!open)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="false" disableGutters>
      <div className={open ? "shrink-page" : ""}>
          <TopMenuBar handleSetOpen={handleSetOpen} />
          <SideDrawer open={open} handleSetOpen={handleSetOpen} />
          <Outlet className="outlet-main" />
      </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
