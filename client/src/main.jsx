import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from "./context/AuthContext"
import { getStoredTheme, setTheme } from './utils/theme';
import './index.css'
import App from './App.jsx'

setTheme(getStoredTheme()); // Set initial theme based on stored preference
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
