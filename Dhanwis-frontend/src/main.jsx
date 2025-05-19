import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CareerProvider } from './context/AminContext/CareerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
         <CareerProvider>
    <HashRouter>
    <App />
    </HashRouter>
    </CareerProvider>
    </ThemeProvider>
  </StrictMode>,
)
