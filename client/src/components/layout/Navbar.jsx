import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import  ModeToggle from "@/components/mode-toggle"
import { useEffect, useState } from "react"

export default function Navbar() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <header className="w-full px-6 py-4 shadow-md bg-white dark:bg-gray-900 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-300">
        UniVote
      </Link>

      <nav className="flex items-center space-x-4">
        <Link to="/" className="text-sm hover:underline">Home</Link>
        {isLoggedIn && <Link to="/dashboard" className="text-sm hover:underline">Dashboard</Link>}

        <ModeToggle />

        {isLoggedIn ? (
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
