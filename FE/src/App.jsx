import { useState } from 'react'
import './App.css'
import { Container } from '@mui/material'
import TopMenuBar from './shared/TopMenuBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="false" disableGutters>

      <TopMenuBar />
      Text
    </Container>
  )
}

export default App
