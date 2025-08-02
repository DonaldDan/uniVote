import React from "react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { AuthProvider } from "./context/AuthContext"
import { ThemeProvider } from "next-themes" // ✅ ThemeProvider from next-themes
import "./index.css"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
