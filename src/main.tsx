import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/design-system.css'
import './styles/base.css'
import './styles/responsive.css'
import App from './App.tsx'
import { initAnalytics } from './analytics/analytics'

// Initialize analytics on app startup
initAnalytics()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
