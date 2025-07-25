import Navbar from "@/components/layout/Navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "@/components/layout/Footer"

export function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
