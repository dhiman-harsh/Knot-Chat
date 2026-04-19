import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeSwitcher from './context/ThemeSwitcher.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'
import { ChatContextProvider } from './context/ChatContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <BrowserRouter>
        <ThemeSwitcher>
          <StrictMode>
            <App />
          </StrictMode>
        </ThemeSwitcher>
      </BrowserRouter>
    </ChatContextProvider>
  </AuthContextProvider>,
)
