import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { LoginSignupProvider } from './Context/LoginSignupContext.jsx'
import { TeacherProvider } from './Context/TeacherPortalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LoginSignupProvider>
        <TeacherProvider>
          <App />
        </TeacherProvider>
      </LoginSignupProvider>
    </ThemeProvider>

  </StrictMode>,
)
