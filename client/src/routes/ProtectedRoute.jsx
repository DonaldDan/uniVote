import { Navigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

export default function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth()

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // Logged in but not authorized
  if (requiredRole && user.role?.toLowerCase() !== requiredRole.toLowerCase()) {
    return <Navigate to="/landing" replace />
  }

  // Authorized
  return children
}
