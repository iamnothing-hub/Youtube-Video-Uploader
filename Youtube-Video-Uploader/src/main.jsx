import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { CssBaseline} from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { darkTheme } from './helper/Theme.js'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
