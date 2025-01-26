import './App.css'
import { Container } from '@mui/material'
import TopMenuBar from './shared/TopMenuBar'
import { Outlet } from 'react-router'

function App() {

  return (
    <Container maxWidth="false" disableGutters>
      <TopMenuBar />
      <Outlet />
    </Container>
  )
}

export default App
