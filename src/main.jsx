import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeSwitcher from './context/ThemeSwitcher.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'
import { ChatContextProvider } from './context/ChatContext.jsx'
import { SidebarContextProvider } from './context/SidebarContext.jsx'
import { ChatWindowContextProvider } from './context/ChatWindowContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <BrowserRouter>
        <ThemeSwitcher>
          <ChatWindowContextProvider>
            <SidebarContextProvider>
              <StrictMode>
                <App />
              </StrictMode>
            </SidebarContextProvider>
          </ChatWindowContextProvider>
        </ThemeSwitcher>
      </BrowserRouter>
    </ChatContextProvider>
  </AuthContextProvider>,
)
