import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import CaseConverter from './features/caseConverter/CaseConverter.jsx'
import TextFormatter from './features/textFormatter/TextFormatter.jsx'
import Issues from './features/Issues.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} >
          <Route index element={<CaseConverter />} />
          <Route path="issues" element={<Issues />} />
          <Route path="caseConverter" element={<CaseConverter />} />
          <Route path="caseConverter/:button" element={<CaseConverter />} />
          <Route path="textFormatter" element={<TextFormatter />} />
          <Route path="textFormatter/:button" element={<TextFormatter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
