import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeSwitcher from './context/ThemeSwitcher.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <BrowserRouter>
      <ThemeSwitcher>
        <StrictMode>
          <App />
        </StrictMode>
      </ThemeSwitcher>
    </BrowserRouter>
  </AuthContextProvider>,
)
