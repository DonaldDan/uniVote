import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import ModeToggle from "@/components/mode-toggle"
import { useAuth } from "@/context/AuthContext" // ⬅️ Use the context here

export default function Navbar() {
  const navigate = useNavigate()
  const { user, logout } = useAuth() // ⬅️ Grab auth state
  const isLoggedIn = !!user // check if user is logged in

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4 shadow-md bg-[#003049] text-white flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/assets/vote.jpeg"
          alt="Vote logo"
          className="w-10 h-10 object-contain rounded-full animate-spin"
        />
        <span className="text-xl font-bold text-[#F77F00]">Univote</span>
      </Link>

      <nav className="flex items-center space-x-4">
        <Link to="/" className="text-sm text-white hover:underline">Home</Link>

        {isLoggedIn && (
          <Link to="/dashboard" className="text-sm text-white hover:underline">Dashboard</Link>
        )}

        <ModeToggle />

        {isLoggedIn ? (
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Link to="/login">
              <Button variant="ghost" className="text-white border-white hover:bg-white/10">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-[#F77F00] hover:bg-[#e86f00] text-white">
                Register
              </Button>
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
