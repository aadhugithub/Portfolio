import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext'
import { AccessibilityProvider } from './contexts/AccessibilityContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AccessibilityProvider>
        <App />
      </AccessibilityProvider>
    </ThemeProvider>
  </StrictMode>,
)
