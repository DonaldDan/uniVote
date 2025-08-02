import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "@/pages/LandingPage"
import DashboardPage from "@/pages/DashboardPage"
import { Layout } from "@/components/layout/Layout"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import HomePage from "@/pages/HomePage"
import ProtectedRoute from "@/routes/ProtectedRoute"
import { Toaster } from "sonner"

function App() {
  return (
    <>
      <Toaster richColors />
      <Router>
        <Routes>
        <Route element={<Layout />}>
          <Route path="/landing" element={<LandingPage />} />
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            {/* ✅ Example of protected route */}
            <Route
              path="dashboard"
              element={
                <ProtectedRoute requiredRole="admin">
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
