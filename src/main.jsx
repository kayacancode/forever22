import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Connect from './Connect.jsx'
import Companies from './Companies.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
